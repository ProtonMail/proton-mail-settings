import React from 'react';
import { Select } from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { noop } from 'react-components/node_modules/proton-shared/lib/helpers/function';

const weekdaysOptions = [
    { text: c('Option').t`Monday`, value: 'monday' },
    { text: c('Option').t`Tuesday`, value: 'tuesday' },
    { text: c('Option').t`Wednesday`, value: 'wednesday' },
    { text: c('Option').t`Thursday`, value: 'thursday' },
    { text: c('Option').t`Friday`, value: 'friday' },
    { text: c('Option').t`Saturday`, value: 'saturday' },
    { text: c('Option').t`Sunday`, value: 'sunday' }
];

const WeekDayInput = ({ onChange, ...rest }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return <Select id="startWeekday" options={weekdaysOptions} onChange={handleChange} {...rest} />;
};

WeekDayInput.propTypes = {
    onChange: PropTypes.func
};

WeekDayInput.defaultValues = {
    onChange: noop
};

export default WeekDayInput;
