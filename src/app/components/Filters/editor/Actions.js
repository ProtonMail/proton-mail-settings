import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Input, Label, Button, Radio, Icon, Select, Row, SmallButton, PrimaryButton } from 'react-components';
import { getI18n as getI18nFilter, newCondition } from 'proton-shared/lib/filters/factory';

import FilterConditionValues from '../FilterConditionValues';
import RadioContainsAttachements from '../RadioContainsAttachements';

function FilterEditor({ filter, onChange }) {
    const { OPERATORS, COMPARATORS, TYPES } = getI18nFilter();
    const toOptions = (list = []) => list.map(({ label: text, value }) => ({ text, value }));

    const MOVE_TO = [
        {
            text: c('Filter Actions').t`Move to`
        },
        {
            text: c('Filter Actions').t`Move to archive`,
            value: 'archive'
        },
        {
            text: c('Filter Actions').t`Move to mailbox`,
            value: 'inbox'
        }
    ];

    const MARK_AS = [
        {
            text: c('Filter Actions').t`Mark as`
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

    return (
        <>
            <Row>
                <Label htmlFor="accountName">{c('New Label form').t`Actions`}</Label>
                <Input id="labelsFiler" type="text" placeholder={c('New Label form').t('Add labels')} />
            </Row>
            <Row>
                <Select options={MOVE_TO} onChange={handleChange('moveTo')} className="mlauto" />
            </Row>
            <Row>
                <Select options={MARK_AS} onChange={handleChange('markAs')} className="mlauto" />
            </Row>
        </>
    );
}

export default FilterEditor;
