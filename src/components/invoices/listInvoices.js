import { h, render, Component } from 'preact';

import { getInvoices, download } from '../../api/payments';
import invoicePrice from './filters/invoicePrice';
import invoiceInfo from './filters/invoiceInfo';
import { readableTime } from '../../helpers/filters/time';

const COMPONENT_CLASSNAME = 'field-usernameInput';

export default class ListInvoices extends Component {
    state = {
        Invoices: [],
        Total: 0
    };

    componentDidMount() {
        getInvoices().then((data) => {
            this.setState(data);
        });
    }

    download({ ID }) {
        download(ID);
    }

    render({ domains, ...props }) {
        return (
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
                                <pay-invoice-btn data-model="invoice" ng-if="invoice.State === 0" />
                            </td>
                            <td>
                                <span class="pm_badge">{invoiceInfo(invoice, 'type')}</span>
                            </td>
                            <td>
                                <span class="pm_badge">{invoiceInfo(invoice, 'state')}</span>
                            </td>
                            <td>{readableTime(invoice.CreateTime)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
