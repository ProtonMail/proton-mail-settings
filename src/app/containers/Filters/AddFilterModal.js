import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Modal, HeaderModal, FooterModal } from 'react-components';
import { Input, Label, Button, SubTitle, Icon, Select, Row } from 'react-components';
import filterFactory, { getI18n as getI18nFilter } from 'proton-shared/lib/filters/factory';
import { computeFromTree } from 'proton-shared/lib/filters/sieve';
import FilterEditor from '../../components/Filters/FilterEditor';

function AddFilterModal({ filter, type, ...props }) {
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
        // console.log({
        //     filter: filter,
        //     type,
        //     prout: filterFactory({}, 'simple')
        // });
    }

    const handleSubmit = console.log;
    const handleChange = console.log;

    // const { OPERATORS, COMPARATORS, TYPES } = getI18nFilter();
    // const toOptions = (list = []) => list.map(({ label: text, value }) => ({ text, value }));

    // const handleKeyUpValue = ({ scope, condition, index }) => ({ key, target }) => {
    //     if (key !== 'Enter') {
    //         return;
    //     }

    //     const newScoped = condition[scope].concat(target.value);
    //     const newFilter = {
    //         ...filter,
    //         Simple: {
    //             ...filter.Simple,
    //             Conditions: filter.Simple.Conditions.map((item, i) => {
    //                 if (i === index) {
    //                     return {
    //                         ...condition,
    //                         [scope]: newScoped
    //                     }
    //                 }
    //                 return item;
    //             })
    //         }
    //     }
    //     setModel(newFilter);
    //     target.value = '';
    // }

    // const handleClickRemove = (value, { scope, condition, index }) => () => {
    //     const newScoped = condition[scope].filter((val) => val !== value);
    //     const newFilter = {
    //         ...filter,
    //         Simple: {
    //             ...filter.Simple,
    //             Conditions: filter.Simple.Conditions.map((item, i) => {
    //                 if (i === index) {
    //                     return {
    //                         ...condition,
    //                         [scope]: newScoped
    //                     }
    //                 }
    //                 return item;
    //             })
    //         }
    //     }
    //     setModel(newFilter);
    // }

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
                <Row>
                    <Label htmlFor="accountName">{c('New Label form').t`Name`}</Label>
                    <Input
                        id="accountName"
                        type="text"
                        value={model.Name}
                        onChange={handleChange}
                        placeholder={c('New Label form').t('Name')}
                        required={true}
                    />
                </Row>

                {filter ? (
                    <pre style={{ maxHeight: '150px', overflow: 'auto' }}>{JSON.stringify(filter.Simple, null, 2)}</pre>
                ) : null}
                {model.Name ? <FilterEditor filter={model} /> : null}
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
