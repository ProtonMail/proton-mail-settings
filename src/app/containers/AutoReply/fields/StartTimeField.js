import React from 'react';
import { Row, Label, Field } from 'react-components';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import TimeInput from '../inputs/TimeSelect';

const StartTimeField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="startTime">{c('Label').t`Start time`}</Label>
            <Field>
                <TimeInput id="startTime" value={value} onChange={onChange} />
            </Field>
        </Row>
    );
};

StartTimeField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default StartTimeField;
