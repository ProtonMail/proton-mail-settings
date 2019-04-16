import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import {
    Label,
    Input,
    Modal,
    HeaderModal,
    ContentModal,
    FooterModal,
    ResetButton,
    PrimaryButton
} from 'react-components';

import filterFactory, { getI18n as getI18nFilter } from 'proton-shared/lib/filters/factory';
import { computeFromTree } from 'proton-shared/lib/filters/sieve';
import FilterEditor from '../../components/Filters/FilterEditor';
import FilterEditorSieve from '../../components/Filters/FilterEditorSieve';

function AddFilterModal({ filter, type, mode, onClose, show, onSubmit }) {
    const [model, setModel] = useState(
        filter || {
            Name: ''
        }
    );

    if (filter) {
        const simple = computeFromTree(filter);
        if (!simple) {
            delete filter.Simple;
        }
        simple && (filter.Simple = simple);
        console.log({
            filter: filter,
            type,
            mode,
            prout: filterFactory({}, 'simple')
        });
    }

    const handleSubmit = console.log;
    const handleChange = console.log;
    const handleChangeSieve = console.log;

    console.log('[FILTER]', filter);
    return (
        <Modal onClose={onClose} onSubmit={onSubmit} show={show}>
            <HeaderModal onClose={onClose}>{c('Add Filter Modal').t`Custom Filter`}</HeaderModal>

            <ContentModal onReset={onClose} onSubmit={handleSubmit}>
                <div className="flex flex-nowrap onmobile-flex-column mb1">
                    <Label htmlFor="accountName">{c('New Label form').t`Name`}</Label>
                    <Input
                        id="accountName"
                        type="text"
                        value={model.Name}
                        onChange={handleChange}
                        placeholder={c('New Label form').t('Name')}
                        required={true}
                    />
                </div>
                {model.Name && type !== 'sieve' ? <FilterEditor filter={model} /> : null}
                {type === 'sieve' ? <FilterEditorSieve onChange={handleChangeSieve} filter={model} /> : null}

                <FooterModal>
                    <ResetButton>{c('New Label form').t`Cancel`}</ResetButton>
                    <PrimaryButton type="submit">{c('New Label form').t`Save`}</PrimaryButton>
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
