import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Loader, Input, Label, Select, Row, useLabels } from 'react-components';

import FilterConditionValues from '../FilterConditionValues';
import RadioContainsAttachements from '../RadioContainsAttachements';

function FilterEditor({ filter, onChange }) {
    const { Actions } = filter.Simple;
    const [labels = [], loading] = useLabels();

    const folders = labels.reduce((acc, { Name, Exclusive }) => {
        if (Exclusive !== 1) {
            return acc;
        }
        acc.push({
            text: c('Filter Actions').t`Move to ${Name}`,
            value: Name
        });
        return acc;
    }, []);

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
                        <Input id="actions" type="text" placeholder={c('New Label form').t('Add labels')} />
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
