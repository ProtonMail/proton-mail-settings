import { INVOICE_STATE } from '../../../constants';
import currencyFilter from '../../../helpers/filters/currency';

const format = (State, AmountCharged, AmountDue) => {
    const value = State === INVOICE_STATE.UNPAID ? AmountDue : AmountCharged;
    return value / 100;
};

function filter({ State, AmountCharged = 0, AmountDue = 0, Currency } = {}) {
    const amount = format(State, AmountCharged, AmountDue);
    return currencyFilter(amount, Currency);
}

export default filter;
