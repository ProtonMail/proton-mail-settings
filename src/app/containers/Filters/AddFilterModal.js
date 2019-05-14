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
import { validate, validateComplex } from 'proton-shared/lib/filters/validator';
import { noop } from 'proton-shared/lib/helpers/function';

import ConditionsEditor from '../../components/Filters/editor/Conditions';
import ActionsEditor from '../../components/Filters/editor/Actions';
import OperatorEditor from '../../components/Filters/editor/Operator';
import SieveEditor from '../../components/Filters/editor/Sieve';

function AddFilterModal({ filter, type, onSubmit, loading, ...props }) {
    const filterModel = newFilter(filter);
    const [model, setModel] = useState(filterModel);
    const [isInvalid, setValitidy] = useState(false);
    const [sieveCode, setSieveCode] = useState(filterModel.Sieve || '');

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

        if (type === 'sieve') {
            const filter = {
                ...model,
                Sieve: sieveCode
            };
            const { isValid } = validateComplex(filter);

            if (isInvalid || !isValid) {
                return alert('NEIN NEIN NEIN');
            }

            return onSubmit(formatFilter(filter, 'complex'));
        }

        const filter = formatFilter(model, 'simple');
        const { isValid, ...errors } = validate(filter);

        if (!isValid) {
            console.log(errors);
            return alert('NEIN NEIN NEIN');
        }

        onSubmit(filter);
    };

    const handleInputName = ({ target }) => {
        setModel({
            ...model,
            Name: target.value
        });
    };

    const handleChangeSieve = (err, code) => {
        /*
            Flow:
                onChange: !fromLint -> disable save
                onChange: fromLint -> enable save if !error + updateFilter object
         */
        const name = `[${err ? 'INVALID' : 'VALID'}] Sieve code`;
        console.groupCollapsed(name);
        console.log(code);
        console.log(model);
        console.groupEnd(name);
        setValitidy(err);
        console.log('setValitidy', err, { err });

        if (!err) {
            setSieveCode(code);
        }
    };
    const handleChangeBeforeLint = () => {
        setValitidy(true);
        console.log('setValitidy', true);
    };

    return (
        <Modal {...props} loading={loading}>
            <HeaderModal onClose={props.onClose}>{c('Add Filter Modal').t`Custom Filter`}</HeaderModal>

            <ContentModal onSubmit={noop} loading={loading}>
                {type === 'sieve' ? (
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
                        <SieveEditor
                            filter={filterModel}
                            onChange={handleChangeSieve}
                            onChangeBeforeLint={handleChangeBeforeLint}
                        />
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
