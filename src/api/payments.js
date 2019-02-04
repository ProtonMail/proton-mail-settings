import { get, post } from '../lib/request';
import bridge from '../lib/bridge';

const toURL = (...args) => ['payments'].concat(args);

export const getInvoices = ({ Page = 0, Owner = 0, PageSize = 25 } = {}) => {
    return get(toURL('invoices'), {
        queryParams: { Page, Owner, PageSize }
    });
};

export const check = async (invoice) => {
    const data = await post(toURL('invoices', invoice.ID, 'check'));
    bridge('payments/invoices/pay', (i) => i)({
        invoice,
        checkInvoice: data
    });
};

export const getInvoice = (id) => {
    return get(toURL('invoices', id), {}, 'arrayBuffer');
};

export const download = async (id) => {
    const buffer = await getInvoice(id);
    const fileName = `ProtonMail Invoice ${id}.pdf`;
    const blob = new Blob([buffer], { type: 'application/pdf' });
    bridge('payments/invoices', (i) => i)({
        blob,
        fileName
    });
};
