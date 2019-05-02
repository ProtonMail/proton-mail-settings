import React from 'react';
import { Row, Label, Field } from 'react-components';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import TimeInput from '../inputs/TimeSelect';

const EndTimeField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="endTime">{c('Label').t`End time`}</Label>
            <Field>
                <TimeInput id="endTime" value={value} onChange={onChange} />
            </Field>
        </Row>
    );
};

EndTimeField.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default EndTimeField;
