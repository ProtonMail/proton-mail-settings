import { INVOICE_TYPE, INVOICE_STATE } from '../../../constants';

const I18N = {
    type: {
        [INVOICE_TYPE.OTHER]: 'Other',
        [INVOICE_TYPE.SUBSCRIPTION]: 'Subscription',
        [INVOICE_TYPE.CANCELLATION]: 'Cancellation',
        [INVOICE_TYPE.CREDIT]: 'Credit',
        [INVOICE_TYPE.DONATION]: 'Donation'
    },
    state: {
        [INVOICE_STATE.UNPAID]: 'Unpaid',
        [INVOICE_STATE.PAID]: 'Paid',
        [INVOICE_STATE.VOID]: 'Void',
        [INVOICE_STATE.BILLED]: 'Billed'
    }
};

function filter(invoice = {}, mode) {
    const key = mode === 'type' ? 'Type' : 'State';
    return (I18N[mode] || {})[invoice[key]] || '';
}
export default filter;
