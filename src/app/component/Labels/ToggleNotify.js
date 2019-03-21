import React, { useState, useEffect } from 'react';
import { Toggle } from 'react-components';

const ToggleNotify = ({ checked, id, onChange }) => {
    const [toggled, setToggle] = useState(checked);
    useEffect(() => {
        setToggle(checked);
    }, [checked]);
    const handleChange = (e) => {
        setToggle(e.target.checked);
        onChange(e.target.checked);
    };
    return <Toggle id={id} checked={toggled} onChange={handleChange} />;
};

export default ToggleNotify;
