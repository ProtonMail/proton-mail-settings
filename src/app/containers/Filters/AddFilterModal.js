import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import {
    Modal,
    HeaderModal,
    InnerModal,
    FooterModal,
    ContentModal,
    PrimaryButton,
    Input,
    Label,
    Row
} from 'react-components';
import { newFilter, format as formatFilter } from 'proton-shared/lib/filters/factory';
import { noop } from 'proton-shared/lib/helpers/function';

import ConditionsEditor from '../../components/Filters/editor/Conditions';
import ActionsEditor from '../../components/Filters/editor/Actions';
import OperatorEditor from '../../components/Filters/editor/Operator';
import SieveEditor from '../../components/Filters/editor/Sieve';

function AddFilterModal({ filter, type, onSubmit, loading, ...props }) {
    const filterModel = newFilter(filter);
    const [model, setModel] = useState(filterModel);

    const handleChange = (key) => (data) => {
        setModel({
            ...model,
            Simple: {
                ...model.Simple,
                [key]: Array.isArray(data) ? data : { ...model.Simple[key], ...data }
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        onSubmit(formatFilter(model, 'simple'));
    };

    const handleInputName = ({ target }) => {
        setModel({
            ...model,
            Name: target.value
        });
    };

    const handleChangeSieve = console.log;

    return (
        <Modal {...props} loading={loading}>
            <HeaderModal onClose={props.onClose}>{c('Add Filter Modal').t`Custom Filter`}</HeaderModal>

            <ContentModal onSubmit={noop} loading={loading}>
                {type === 'sieve' ? (
                    <InnerModal>
                        <SieveEditor filter={filterModel} onChange={handleChangeSieve} />
                    </InnerModal>
                ) : null}

                {type !== 'sieve' ? (
                    <InnerModal>
                        <Row>
                            <Label htmlFor="accountName">{c('New Label form').t`Name`}</Label>
                            <Input
                                id="accountName"
                                type="text"
                                value={model.Name}
                                onInput={handleInputName}
                                placeholder={c('New Label form').t('Name')}
                                required
                            />
                        </Row>

                        <OperatorEditor filter={filterModel} onChange={handleChange('Operator')} />
                        <ConditionsEditor filter={filterModel} onChange={handleChange('Conditions')} />
                        <ActionsEditor filter={filterModel} onChange={handleChange('Actions')} />
                    </InnerModal>
                ) : null}
                <FooterModal>
                    <PrimaryButton disabled={loading} onClick={handleSubmit}>
                        {c('Action').t`Save`}
                    </PrimaryButton>
                </FooterModal>
            </ContentModal>
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
