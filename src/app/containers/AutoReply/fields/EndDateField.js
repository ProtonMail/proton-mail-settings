import React from 'react';
import PropTypes from 'prop-types';
import { Row, Label, DateInput, Field } from 'react-components';
import { c } from 'ttag';

const EndDateField = ({ value, onChange }) => {
    return (
        <Row className="flex-spacebetween">
            <Label htmlFor="endDate">{c('Label').t`End date`}</Label>
            <Field>
                <DateInput id="endDate" className="w100" defaultDate={value} onSelect={onChange} format="DD MM YYYY" />
            </Field>
        </Row>
    );
};

EndDateField.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired
};

export default EndDateField;
