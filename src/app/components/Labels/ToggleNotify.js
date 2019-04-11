import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { debounce, noop } from 'proton-shared/lib/helpers/function';
import {
    Title,
    SubTitle,
    LearnMore,
    useApiResult,
    Paragraph,
    useLabels,
    useApiWithoutResult,
    useEventManager,
    useNotifications
} from 'react-components';
import { updateLabel } from 'proton-shared/lib/api/labels';

import ToggleBoolean from '../ui/ToggleBoolean';

const ToggleNotify = ({ onChange, label }) => {
    const { call } = useEventManager();
    const { createNotification } = useNotifications();
    const { request } = useApiWithoutResult(updateLabel);

    const handleChange = async () => {
        const newLabel = {
            ...label,
            Notify: +!label.Notify
        };
        await request(label.ID, newLabel);
        call();
        createNotification({
            text: c('label/folder notification').t`${label.Name} updated`
        });
    };
    return (
        <ToggleBoolean id={`item-${label.ID}`} checked={label.Notify === 1} onChange={debounce(handleChange, 300)} />
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
