import React from 'react';
import { Label, Checkbox } from 'react-components';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { noop } from 'react-components/node_modules/proton-shared/lib/helpers/function';

const weekdaysOptions = {
    monday: c('Option').t`Monday`,
    tuesday: c('Option').t`Tuesday`,
    wednesday: c('Option').t`Wednesday`,
    thursday: c('Option').t`Thursday`,
    friday: c('Option').t`Friday`,
    saturday: c('Option').t`Saturday`,
    sunday: c('Option').t`Sunday`
};

const WeekDayCheckboxGroup = ({ weekdaysChecked, onChange }) => {
    const handleChange = (weekday) => () => {
        onChange({ ...weekdaysChecked, [weekday]: !!weekdaysChecked[weekday] });
    };

    return (
        <div className="flex flex-column">
            {Object.keys(weekdaysOptions).map((weekday) => (
                <Label htmlFor={`weekday-${weekday}`} key={weekday}>
                    <Checkbox
                        id={`weekday-${weekday}`}
                        checked={!!weekdaysChecked[weekday]}
                        onChange={handleChange(weekday)}
                    />
                    {weekdaysOptions[weekday]}
                </Label>
            ))}
        </div>
    );
};

WeekDayCheckboxGroup.propTypes = {
    onChange: PropTypes.func,
    weekdaysChecked: PropTypes.shape({
        monday: PropTypes.bool,
        tuesday: PropTypes.bool,
        wednesday: PropTypes.bool,
        thursday: PropTypes.bool,
        friday: PropTypes.bool,
        saturday: PropTypes.bool,
        sunday: PropTypes.bool
    })
};

WeekDayCheckboxGroup.defaultValues = {
    onChange: noop,
    weekdaysChecked: {}
};

export default WeekDayCheckboxGroup;
