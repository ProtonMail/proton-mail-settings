import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Input, Label, Button, Radio, Icon, Select, Row, SmallButton, PrimaryButton } from 'react-components';
import { getI18n as getI18nFilter, newCondition } from 'proton-shared/lib/filters/factory';

import FilterConditionValues from '../FilterConditionValues';
import RadioContainsAttachements from '../RadioContainsAttachements';

function FilterEditor({ filter, onChange }) {
    const [model, setModel] = useState(filter);

    const { OPERATORS, COMPARATORS, TYPES } = getI18nFilter();
    const toOptions = (list = []) => list.map(({ label: text, value }) => ({ text, value }));

    function syncModel(value, { scope, condition, index }, newScoped) {
        console.log(value, newScoped, {
            config: { scope, condition, index }
        });
        const newConditions = model.Simple.Conditions.map((item, i) => {
            if (i === index) {
                return {
                    ...condition,
                    [scope]: newScoped
                };
            }
            return item;
        });
        onChange(newConditions);
        setModel({
            ...model,
            Simple: {
                ...model.Simple,
                Conditions: newConditions
            }
        });
    }

    const handleAddNewCondition = () => {
        setModel({
            ...model,
            Simple: {
                ...model.Simple,
                Conditions: model.Simple.Conditions.concat(newCondition())
            }
        });
    };

    const handleRemoveCondition = (index) => () => {
        const Conditions = model.Simple.Conditions.filter((item, i) => i !== index);
        setModel(Conditions.length ? Conditions : [newCondition()]);
    };

    const handleChangeAttachments = (config) => (value) => {
        const newComparator = COMPARATORS.find((item) => item.value === value);
        syncModel(value, config, newComparator);
    };

    const handleChangeType = (config) => ({ target }) => {
        const newType = TYPES.find((item) => item.value === target.value);
        syncModel(target.value, config, newType);
    };
    const handleChangeCondition = (config) => ({ target }) => {
        const newComparator = COMPARATORS.find((item) => item.value === target.value);
        syncModel(target.value, config, newComparator);
    };

    const handleDeleteValue = (config) => (value) => {
        const { condition, scope } = config;
        const newScoped = condition[scope].filter((val) => val !== value);
        syncModel(value, config, newScoped);
    };

    const handleAddValue = (config) => (value) => {
        const { condition, scope } = config;
        const newScoped = condition[scope].concat(value);
        syncModel(value, config, newScoped);
    };

    const handleEditValue = (config) => ({ before, value }) => {
        const { condition, scope } = config;
        const newScoped = condition[scope].map((val) => {
            return before === val ? value : val;
        });
        syncModel(value, config, newScoped);
    };

    return (
        <>
            {model.Simple.Conditions.map((condition, index) => {
                return (
                    <Row key={`condition-${index}`}>
                        {condition.Type.value === 'attachments' ? (
                            <>
                                <Select
                                    options={toOptions(TYPES)}
                                    className="mr1"
                                    defaultValue={condition.Type.value}
                                />

                                <RadioContainsAttachements
                                    comparator={condition.Comparator.value}
                                    onChange={handleChangeAttachments({ scope: 'Comparator', condition, index })}
                                />
                            </>
                        ) : null}

                        {condition.Type.value !== 'attachments' ? (
                            <>
                                <Label>
                                    {c('Label').t`Conditions`}
                                    <SmallButton onClick={handleRemoveCondition(index)}>
                                        <Icon name="trash" />
                                    </SmallButton>
                                </Label>

                                <div className="w100">
                                    <Select
                                        options={toOptions(TYPES)}
                                        className="mb1"
                                        defaultValue={condition.Type.value}
                                        onChange={handleChangeType({
                                            scope: 'Type',
                                            condition,
                                            index
                                        })}
                                    />

                                    <FilterConditionValues
                                        options={toOptions(COMPARATORS)}
                                        condition={condition}
                                        onChangeCondition={handleChangeCondition({
                                            scope: 'Comparator',
                                            condition,
                                            index
                                        })}
                                        onDelete={handleDeleteValue({ scope: 'Values', condition, index })}
                                        onAdd={handleAddValue({ scope: 'Values', condition, index })}
                                        onEdit={handleEditValue({ scope: 'Values', condition, index })}
                                    />
                                </div>
                            </>
                        ) : null}
                    </Row>
                );
            })}

            <PrimaryButton className="ml50" onClick={handleAddNewCondition}>{c('Action')
                .t`Add a new condition`}</PrimaryButton>
        </>
    );
}

export default FilterEditor;