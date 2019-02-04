import { h, Component } from 'preact';

import { check } from '../../api/payments';

export default function payInvoiceBtn({ message, invoice = {} }) {
    console.log('invoice', invoice);
    return (
        <div>
            <button onclick={() => check(invoice)} type="button" class="payInvoiceBtn-container pm_button link">
                {message}
            </button>
        </div>
    );
}
