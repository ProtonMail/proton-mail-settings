import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Loader, Input, Label, Select, Row, useLabels, Autocomplete, useAutocomplete } from 'react-components';

import FilterConditionValues from '../FilterConditionValues';
import RadioContainsAttachements from '../RadioContainsAttachements';

function FilterEditor({ filter, onChange }) {
    const { Actions } = filter.Simple;
    const [list = [], loading] = useLabels();

    const { folders, labels } = list.reduce(
        (acc, label) => {
            const { Name, Exclusive } = label;
            if (Exclusive !== 1) {
                acc.labels.push(Name);
                return acc;
            }
            acc.folders.push({
                text: c('Filter Actions').t`Move to ${Name}`,
                value: Name
            });
            return acc;
        },
        { folders: [], labels: [] }
    );

    const { changeInputValue, selectedItems, inputValue, submit, select, deselect } = useAutocomplete({
        multiple: true
    });

    // console.log(selectedItems);

    const MOVE_TO = [
        {
            text: c('Filter Actions').t`Move to ...`
        },
        {
            text: c('Filter Actions').t`Move to archive`,
            value: 'archive'
        },
        {
            text: c('Filter Actions').t`Move to mailbox`,
            value: 'inbox'
        }
    ].concat(folders);

    const MARK_AS = [
        {
            text: c('Filter Actions').t`Mark as ...`
        },
        {
            text: c('Filter Actions').t`Mark as read`,
            value: 'read'
        },
        {
            text: c('Filter Actions').t`Mark as starred`,
            value: 'starred'
        }
    ];

    const ACTIONS = {
        markAs: (value) => ({
            Mark: {
                Starred: value === 'starred',
                Read: value === 'read'
            }
        }),
        moveTo: (value) => ({ FileInto: [value] })
    };

    const handleChange = (mode) => {
        const formatData = ACTIONS[mode];
        return ({ target }) => onChange(formatData(target.value));
    };

    const getDefaultValue = (mode) => {
        if (mode === 'markAs') {
            if (Actions.Mark.Starred && !Actions.Mark.Read) {
                return 'starred';
            }

            if (!Actions.Mark.Starred && Actions.Mark.Read) {
                return 'read';
            }
        }

        if (mode === 'moveTo') {
            const [key] = Actions.FileInto;
            if (key) {
                return key;
            }
        }
    };

    return (
        <Row>
            <Label htmlFor="actions">{c('New Label form').t`Actions`}</Label>
            <div className="w100">
                <Row>
                    {loading ? (
                        <Loader />
                    ) : (
                        <Autocomplete minChars={1} list={labels} onInputValueChange={changeInputValue} />
                    )}
                </Row>
                <Row>
                    {loading ? (
                        <Loader />
                    ) : (
                        <Select
                            options={MOVE_TO}
                            onChange={handleChange('moveTo')}
                            className="mlauto"
                            defaultValue={getDefaultValue('moveTo')}
                        />
                    )}
                </Row>

                <Row>
                    <Select
                        options={MARK_AS}
                        onChange={handleChange('markAs')}
                        className="mlauto"
                        defaultValue={getDefaultValue('markAs')}
                    />
                </Row>
            </div>
        </Row>
    );
}

export default FilterEditor;
