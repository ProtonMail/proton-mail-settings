import React from 'react';
import { Toggle, useToggle } from 'react-components';
import PropTypes from 'prop-types';

const AutoReplyToggle = ({ id }) => {
    const { state, toggle } = useToggle(false);
    return <Toggle id={id} checked={state} onChange={toggle} />;
};

AutoReplyToggle.propTypes = {
    id: PropTypes.string
};

export default AutoReplyToggle;
