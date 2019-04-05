import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Radio } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

function RadioContainsAttachements({ comparator, onChange }) {
    const [value, setValue] = useState(comparator);
    useEffect(() => {
        setValue(value);
    }, [value]);
    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <>
            <Radio
                checked={value === 'contains'}
                onChange={handleChange}
                name="contains"
                value="contains"
                id="contains"
            >
                {c('Option Filter').t('With Attachments')}
            </Radio>

            <Radio
                checked={value === '!contains'}
                onChange={handleChange}
                name="contains"
                value="!contains"
                id="notcontains"
            >
                {c('Option Filter').t('Without Attachments')}
            </Radio>
        </>
    );
}

RadioContainsAttachements.propTypes = {
    comparator: PropTypes.string,
    onChange: PropTypes.fun
};

RadioContainsAttachements.defaultProps = {
    onChange: console.log
};

export default RadioContainsAttachements;
