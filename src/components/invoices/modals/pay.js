import { h, Component } from 'preact';
import Modal from 'react-aria-modal';
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

export default class PayInvoiceModal extends Component {
    state = {
        modalIsOpen: false
    };
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    getApplicationNode() {
        // references are now sync'd and can be accessed.
        return document.getElementById('app');
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.openModal()}>Open Modal</button>
                <Modal
                    titleText="demo one"
                    onExit={() => this.closeModal}
                    getApplicationNode={() => this.getApplicationNode()}
                >
                    <h2 ref={(subtitle) => (this.subtitle = subtitle)}>Hello</h2>
                    <button onClick={() => this.closeModal()}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        );
    }
}
