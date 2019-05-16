import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, InnerModal, FooterModal, ContentModal, PrimaryButton, Button } from 'react-components';
import { newFilter, format as formatFilter } from 'proton-shared/lib/filters/factory';
import { validate, validateComplex } from 'proton-shared/lib/filters/validator';
import { noop } from 'proton-shared/lib/helpers/function';

import ConditionsEditor from '../../components/Filters/editor/Conditions';
import ActionsEditor from '../../components/Filters/editor/Actions';
import OperatorEditor from '../../components/Filters/editor/Operator';
import SieveEditor from '../../components/Filters/editor/Sieve';
import PreviewFilter from '../../components/Filters/editor/Preview';
import NameEditor from '../../components/Filters/editor/Name';

import './AddFilterModal.css';

function AddFilterModal({ filter, type, onSubmit, loading, ...props }) {
    const filterModel = newFilter(filter, type);
    const [model, setModel] = useState(filterModel);
    const [isPreview, setPreview] = useState(false);
    const [isInvalid, setValitidy] = useState(false);
    const [sieveCode, setSieveCode] = useState(filterModel.Sieve || '');

    const handleChange = (key) => (data) => {
        setModel((previous) => {
            return {
                ...previous,
                Simple: {
                    ...previous.Simple,
                    [key]: Array.isArray(data) ? data : { ...previous.Simple[key], ...data }
                }
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (type === 'complex') {
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
            console.error({ errors, filter });
            return alert('NEIN NEIN NEIN');
        }

        onSubmit(filter);
    };

    const handleChangeName = (Name) => setModel({ ...model, Name });
    const handleClickPreview = () => setPreview(!isPreview);
    const handleChangeBeforeLint = () => setValitidy(true);
    const handleChangeSieve = (err, code) => {
        setValitidy(err);
        if (!err) {
            setSieveCode(code);
        }
    };

    return (
        <Modal {...props} loading={loading}>
            <HeaderModal onClose={props.onClose}>
                {!isPreview ? c('Add Filter Modal').t`Custom Filter` : c('Add Filter Modal').t`Custom Filter (Preview)`}
            </HeaderModal>

            <ContentModal onSubmit={noop} loading={loading} className={isPreview ? 'AddFilterModal-isPreview' : ''}>
                {type === 'complex' ? (
                    <InnerModal className="AddFilterModal-editor">
                        <NameEditor error={errors.name} filter={filterModel} onChange={handleChangeName} />
                        <SieveEditor
                            filter={filterModel}
                            onChange={handleChangeSieve}
                            onChangeBeforeLint={handleChangeBeforeLint}
                        />
                    </InnerModal>
                ) : null}

                {type !== 'complex' ? (
                    <InnerModal className="AddFilterModal-editor">
                        <NameEditor filter={filterModel} onChange={handleChangeName} />
                        <OperatorEditor filter={filterModel} onChange={handleChange('Operator')} />
                        <ConditionsEditor filter={filterModel} onChange={handleChange('Conditions')} />
                        <ActionsEditor filter={filterModel} onChange={handleChange('Actions')} />
                    </InnerModal>
                ) : null}

                {isPreview ? (
                    <InnerModal>
                        <PreviewFilter filter={model} />
                    </InnerModal>
                ) : null}

                {isPreview ? (
                    <FooterModal>
                        <Button type="button" onClick={handleClickPreview}>{c('Action').t`Back`}</Button>
                        <PrimaryButton disabled={loading} onClick={handleSubmit}>
                            {c('Action').t`Save`}
                        </PrimaryButton>
                    </FooterModal>
                ) : null}

                {!isPreview ? (
                    <FooterModal>
                        <Button onClick={props.onClose}>{c('Action').t`Close`}</Button>
                        {type !== 'complex' ? (
                            <Button type="button" className="mlauto mr1" onClick={handleClickPreview}>{c('Action')
                                .t`Preview`}</Button>
                        ) : null}
                        <PrimaryButton type="button" disabled={loading} onClick={handleSubmit}>
                            {c('Action').t`Save`}
                        </PrimaryButton>
                    </FooterModal>
                ) : null}
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
