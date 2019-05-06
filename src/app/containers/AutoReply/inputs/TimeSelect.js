import React from 'react';
import { range } from 'proton-shared/lib/helpers/array';
import PropTypes from 'prop-types';
import { Select } from 'react-components';
import { noop } from 'react-components/node_modules/proton-shared/lib/helpers/function';

const HOUR = 60 * 60 * 1000;

const timeInputOptions = range(0, 24).reduce((options, hour) => {
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const hours = hour * HOUR;
    return [
        ...options,
        { text: `${formattedHour}:00`, value: hours },
        { text: `${formattedHour}:30`, value: hours + HOUR / 2 }
    ];
}, []);

const TimeInput = ({ onChange, value, ...rest }) => {
    const handleChange = (e) => onChange(parseInt(e.target.value, 10));

    return <Select {...rest} options={timeInputOptions} value={value} onChange={handleChange} />;
};

TimeInput.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};

TimeInput.defaultValues = {
    value: 0,
    onChange: noop
};

export default TimeInput;
