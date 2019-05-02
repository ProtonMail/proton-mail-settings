import React from 'react';
import { range } from 'proton-shared/lib/helpers/array';
import PropTypes from 'prop-types';
import { Select } from 'react-components';
import { noop } from 'react-components/node_modules/proton-shared/lib/helpers/function';

const timeInputOptions = range(0, 23).reduce((options, hour) => {
    const formattedHour = hour < 10 ? `0${hour}` : hour;
    const hourAndMinutes = `${formattedHour}:00`;
    return [
        ...options,
        { text: hourAndMinutes, value: hourAndMinutes },
        { text: hourAndMinutes, value: hourAndMinutes }
    ];
}, []);

const TimeInput = ({ onChange, value, ...rest }) => {
    const handleChange = (e) => onChange(e.target.value);

    return <Select {...rest} options={timeInputOptions} value={value} onChange={handleChange} />;
};

TimeInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

TimeInput.defaultValues = {
    value: '00:00',
    onChange: noop
};

export default TimeInput;
