import React from 'react';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import { noop } from 'react-components/node_modules/proton-shared/lib/helpers/function';
import { Select } from 'react-components';

const durationOptions = [
    {
        text: c('Option').t`Fixed duration`,
        value: 'fixed'
    },
    {
        text: c('Option').t`Repeat daily`,
        value: 'daily'
    },
    {
        text: c('Option').t`Repeat weekly`,
        value: 'weekly'
    },
    {
        text: c('Option').t`Repeat monthly`,
        value: 'monthly'
    },
    {
        text: c('Option').t`Permanent`,
        value: 'permanent'
    }
];

const DurationInput = ({ onChange, ...rest }) => {
    const handleChange = (e) => onChange(e.target.value);

    return <Select onChange={handleChange} options={durationOptions} {...rest} />;
};

DurationInput.propTypes = {
    onChange: PropTypes.func
};

DurationInput.defaultProps = {
    onChange: noop
};

export default DurationInput;
