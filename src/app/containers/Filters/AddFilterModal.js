import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, FooterModal, PrimaryButton, useApiWithoutResult } from 'react-components';
import { Input, Label, Button, SubTitle, Icon, Select, Row } from 'react-components';
import filterFactory, { newFilter, format as formatFilter } from 'proton-shared/lib/filters/factory';
import { computeTree } from 'proton-shared/lib/filters/sieve';
import { updateFilter, addTreeFilter } from 'proton-shared/lib/api/filters';

import ConditionsEditor from '../../components/Filters/editor/Conditions';
import ActionsEditor from '../../components/Filters/editor/Actions';

function AddFilterModal({ filter, type, ...props }) {
    const filterModel = newFilter(filter);
    const [model, setModel] = useState({});

    const { loading, request } = useApiWithoutResult(addTreeFilter);
    // const { loading, request } = useApiWithoutResult(updateFilter);

    const handleChange = (newFilter) => {
        setModel(newFilter);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('SUBMIT', { filter, model, data: formatFilter(model, 'simple') });
        // await request();
    };

    return (
        <Modal {...props} loading={loading}>
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
                <ConditionsEditor filter={filterModel} onChange={handleChange} />
                <ActionsEditor filter={filterModel} onChange={handleChange} />

                <FooterModal>
                    <PrimaryButton type="submit" disabled={loading}>
                        Save
                    </PrimaryButton>
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
