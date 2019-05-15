import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import {
    Loader,
    Input,
    Label,
    Select,
    Row,
    useLabels,
    Autocomplete,
    useAutocomplete,
    AutocompleteSelection
} from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

import FilterConditionValues from '../FilterConditionValues';
import RadioContainsAttachements from '../RadioContainsAttachements';
import LabelActions from './LabelActions';

function ActionsEditor({ filter, onChange }) {
    const { Actions } = filter.Simple;
    const [list = [], loading] = useLabels();

    const { folders, labels, mapLabels } = list.reduce(
        (acc, label) => {
            const { Name, Exclusive } = label;
            if (Exclusive !== 1) {
                acc.mapLabels[Name] = label;
                acc.labels.push(label);
                return acc;
            }
            acc.folders.push({
                text: c('Filter Actions').t`Move to ${Name}`,
                value: Name
            });
            return acc;
        },
        { folders: [], labels: [], mapLabels: Object.create(null) }
    );

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
        moveTo: (value) => ({ FileInto: [value] }),
        labels: (Labels) => ({ Labels })
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

    const getSelectedLabels = () => {
        const { Labels = [], FileInto } = Actions;
        const filter = (name) => mapLabels[name];
        const list = FileInto.filter(filter);
        return [...new Set(Labels.concat(list))].map(filter);
    };

    const handleOnChangeLabel = (labels) => {
        onChange(ACTIONS.labels(labels));
    };

    return (
        <Row>
            <Label htmlFor="actions">{c('New Label form').t`Actions`}</Label>
            <div className="w100">
                <div>
                    {loading ? (
                        <Loader />
                    ) : (
                        <LabelActions onChange={handleOnChangeLabel} labels={labels} selection={getSelectedLabels()} />
                    )}
                </div>
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

ActionsEditor.propTypes = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

ActionsEditor.defaultProps = {
    onChange: noop
};

export default ActionsEditor;
