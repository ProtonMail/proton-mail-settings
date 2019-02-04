import 'babel-polyfill';
import { h, Component } from 'preact';

import { loadUser } from './lib/request';
import ListInvoices from './components/invoices/listInvoices';
import './App.scss';

export default class App extends Component {
    loadUser() {
        loadUser();
    }
    render({ config, name }) {
        return (
            <div class="formList">
                <button onclick={() => this.loadUser()} class="btn">
                    Load user
                </button>

                <ListInvoices />
            </div>
        );
    }
}
