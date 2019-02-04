import { get } from '../lib/request';
import bridge from '../lib/bridge';

const toURL = (...args) => ['payments'].concat(args);

export const getInvoices = ({ Page = 0, Owner = 0, PageSize = 25 } = {}) => {
    return get(toURL('invoices'), {
        body: { Page, Owner, PageSize }
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
