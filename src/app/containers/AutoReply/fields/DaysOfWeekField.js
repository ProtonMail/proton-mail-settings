import React from 'react';
import { Label, Checkbox, Row, Field } from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import moment from 'moment';

const DaysOfWeekField = ({ value, onChange }) => {
    const handleChange = (weekday) => () =>
        onChange(value.includes(weekday) ? value.filter((existing) => weekday !== existing) : [...value, weekday]);

    const firstDayOfWeek = moment.localeData().firstDayOfWeek();
    const options = moment.weekdays(true).map((label, index) => ({ label, weekday: (index + firstDayOfWeek) % 7 }));

    return (
        <Row className="flex-spacebetween">
            <Label>{c('Label').t`Days of the week`}</Label>
            <Field>
                <div className="flex flex-column">
                    {options.map(({ label, weekday }) => (
                        <Label htmlFor={`weekday-${weekday}`} key={label}>
                            <Checkbox
                                id={`weekday-${weekday}`}
                                checked={value.includes(weekday)}
                                onChange={handleChange(weekday)}
                            />
                            {label}
                        </Label>
                    ))}
                </div>
            </Field>
        </Row>
    );
};

DaysOfWeekField.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any.isRequired
};

export default DaysOfWeekField;
