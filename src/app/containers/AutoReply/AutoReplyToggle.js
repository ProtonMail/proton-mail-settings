import React from 'react';
import { Toggle, useToggle } from 'react-components';
import PropTypes from 'prop-types';

const AutoReplyToggle = ({ enabled, ...rest }) => {
    const { state, toggle } = useToggle(enabled);

    return <Toggle {...rest} checked={state} onChange={toggle} />;
};

AutoReplyToggle.propTypes = {
    enabled: PropTypes.bool
};

export default AutoReplyToggle;
