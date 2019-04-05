import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

function ConditionValue({ value, onClick }) {
    const handleClick = () => onClick(value);
    return (
        <li>
            {value}
            <Icon name="delete" style={{ fill: 'red' }} onClick={handleClick} />
        </li>
    );
}

ConditionValue.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.fun
};

ConditionValue.defaultProps = {
    onClick: noop
};

export default ConditionValue;
