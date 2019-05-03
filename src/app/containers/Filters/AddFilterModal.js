import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, FooterModal, PrimaryButton } from 'react-components';
import { Input, Label, Button, SubTitle, Icon, Select, Row } from 'react-components';
import filterFactory, { newFilter } from 'proton-shared/lib/filters/factory';
import { computeFromTree } from 'proton-shared/lib/filters/sieve';
import FilterEditor from '../../components/Filters/FilterEditor';

function AddFilterModal({ filter, type, ...props }) {
    const [model, setModel] = useState(filter || newFilter());

    if (filter) {
        const simple = computeFromTree(filter);
        if (!simple) {
            delete filter.Simple;
        }
        simple && (filter.Simple = simple);
        // console.log({
        //     filter: filter,
        //     type,
        //     prout: filterFactory({}, 'simple')
        // });
    }

    const handleSubmit = console.log;

    return (
        <Modal {...props}>
            <HeaderModal onClose={props.onClose}>{c('Add Filter Modal').t`Custom Filter`}</HeaderModal>

            <form
                onSubmit={handleSubmit}
                className="w90 center flex-item-fluid"
                style={{
                    minHeight: '60vh',
                    overflowY: 'auto'
                }}
            >
                {filter ? (
                    <pre style={{ maxHeight: '150px', overflow: 'auto' }}>{JSON.stringify(filter.Simple, null, 2)}</pre>
                ) : null}
                <FilterEditor filter={model} />

                <FooterModal>
                    <PrimaryButton>Save</PrimaryButton>
                </FooterModal>
            </form>
        </Modal>
    );
}

AddFilterModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

AddFilterModal.defaultProps = {
    show: false,
    mode: 'create'
};

export default AddFilterModal;
