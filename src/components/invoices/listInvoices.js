import { h, render, Component } from 'preact';

import { getInvoices, download } from '../../api/payments';
import invoicePrice from './filters/invoicePrice';
import invoiceInfo from './filters/invoiceInfo';
import { readableTime } from '../../helpers/filters/time';
import { get as getBadge } from '../../helpers/classNames/badges';
import PayInvoiceBtn from './payInvoiceBtn';

export default class ListInvoices extends Component {
    state = {
        Invoices: [],
        Total: 0
    };

    onMessage(e) {
        const { data = {}, type } = e.data || {};
        if (data.fromApp && type === 'payments/invoices/pay') {
            this.setState({
                Invoices: this.state.Invoices.map((invoice) => {
                    if (invoice.ID === data.invoice.ID) {
                        return data.invoice;
                    }
                    return invoice;
                })
            });
        }
    }

    componentDidMount() {
        getInvoices().then((data) => {
            this.setState(data);
            window.addEventListener('message', this.onMessage.bind(this), false);
        });
    }
    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage.bind(this), false);
    }

    download({ ID }) {
        download(ID);
    }

    render({ domains, ...props }) {
        return (
            <div class="pm_table">
                <table id="invoicesTable">
                    <thead>
                        <tr>
                            <th scope="col" class="invoice">
                                ID
                            </th>
                            <th scope="col" class="price">
                                Amount
                            </th>
                            <th scope="col" class="actions">
                                Actions
                            </th>
                            <th scope="col" class="type">
                                Type
                            </th>
                            <th scope="col" class="status">
                                Status
                            </th>
                            <th scope="col" class="time">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Invoices.map((invoice) => (
                            <tr key={invoice.ID} class="invoiceList-row">
                                <td>
                                    <span class="bold">#{invoice.ID}</span>
                                </td>
                                <td>{invoicePrice(invoice)}</td>
                                <td>
                                    <button type="button" class="btn" onclick={() => this.download(invoice)}>
                                        Download
                                    </button>
                                    {invoice.State === 0 ? <PayInvoiceBtn message="Pay" invoice={invoice} /> : ''}
                                </td>
                                <td>
                                    <span class="pm_badge">{invoiceInfo(invoice, 'type')}</span>
                                </td>
                                <td>
                                    <span
                                        className={getBadge({
                                            error: invoice.State === 0,
                                            success: invoice.State === 1
                                        })}
                                    >
                                        {invoiceInfo(invoice, 'state')}
                                    </span>
                                </td>
                                <td>{readableTime(invoice.CreateTime)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
