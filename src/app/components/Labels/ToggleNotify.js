import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { debounce, noop } from 'proton-shared/lib/helpers/function';
import {
    Title,
    SubTitle,
    LearnMore,
    Toggle,
    useApiResult,
    Paragraph,
    useLabels,
    useApiWithoutResult,
    useEventManager,
    useNotifications
} from 'react-components';
import { updateLabel } from 'proton-shared/lib/api/labels';

const ToggleNotify = ({ onChange, label }) => {
    const [toggled, setToggle] = useState(label.Notify === 1);
    const { call } = useEventManager();
    const { createNotification } = useNotifications();
    const { request, loading } = useApiWithoutResult(updateLabel);

    const handleChange = async () => {
        const newLabel = {
            ...label,
            Notify: +!label.Notify
        };
        await request(label.ID, newLabel);
        setToggle(newLabel.Notify === 1);
        call();
        createNotification({
            text: c('label/folder notification').t`${label.Name} updated`
        });
    };
    return (
        <Toggle id={`item-${label.ID}`} checked={toggled} onChange={debounce(handleChange, 300)} loading={loading} />
    );
};

ToggleNotify.propTypes = {
    label: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

ToggleNotify.defaultProps = {
    onChange: noop
};

export default ToggleNotify;
