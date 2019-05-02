import React from 'react';
import { Label, Checkbox, Row, Field } from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';

const weekdaysOptions = {
    monday: c('Option').t`Monday`,
    tuesday: c('Option').t`Tuesday`,
    wednesday: c('Option').t`Wednesday`,
    thursday: c('Option').t`Thursday`,
    friday: c('Option').t`Friday`,
    saturday: c('Option').t`Saturday`,
    sunday: c('Option').t`Sunday`
};

const DaysOfWeekField = ({ value, onChange }) => {
    const handleChange = (weekday) => () => onChange({ ...value, [weekday]: !value[weekday] });

    return (
        <Row className="flex-spacebetween">
            <Label>{c('Label').t`Days of the week`}</Label>
            <Field>
                <div className="flex flex-column">
                    {Object.keys(weekdaysOptions).map((weekday) => (
                        <Label htmlFor={`weekday-${weekday}`} key={weekday}>
                            <Checkbox
                                id={`weekday-${weekday}`}
                                checked={!!value[weekday]}
                                onChange={handleChange(weekday)}
                            />
                            {weekdaysOptions[weekday]}
                        </Label>
                    ))}
                </div>
            </Field>
        </Row>
    );
};

DaysOfWeekField.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.shape({
        monday: PropTypes.bool,
        tuesday: PropTypes.bool,
        wednesday: PropTypes.bool,
        thursday: PropTypes.bool,
        friday: PropTypes.bool,
        saturday: PropTypes.bool,
        sunday: PropTypes.bool
    }).isRequired
};

export default DaysOfWeekField;
