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

const TimeInput = ({ onChange, ...rest }) => {
    const handleChange = (e) => onChange(e.target.value);

    return <Select id="startTime" options={timeInputOptions} onChange={handleChange} {...rest} />;
};

TimeInput.propTypes = {
    onChange: PropTypes.func
};

TimeInput.defaultValues = {
    onChange: noop
};

export default TimeInput;
