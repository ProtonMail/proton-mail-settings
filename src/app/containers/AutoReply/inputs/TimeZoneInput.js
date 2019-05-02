import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'react-components';
import { noop } from 'react-components/node_modules/proton-shared/lib/helpers/function';

const timeZoneOptions = [
    {
        text: 'Europe/Vilnius: UTC +03:00',
        value: 'Europe/Vilnius'
    },
    {
        text: 'Europe/Zurich: UTC +02:00',
        value: 'Europe/Vilnius'
    }
];

const TimeZoneInput = ({ onChange, ...rest }) => {
    const handleChange = (e) => onChange(e.target.value);

    return <Select id="timezone" options={timeZoneOptions} onChange={handleChange} {...rest} />;
};

TimeZoneInput.propTypes = {
    onChange: PropTypes.func
};

TimeZoneInput.defaultProps = {
    onChange: noop
};

export default TimeZoneInput;
