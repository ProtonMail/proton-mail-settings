import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Select, Input } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

import ConditionValue from './ConditionValue';

function FilterConditionValues({ condition, options, onClickValue, onChangeCondition, onKeyUpValue }) {
    const handleClick = (value) => onClickValue(value);
    const handleKeyUp = ({ key, target }) => {
        if (key !== 'Enter') {
            return;
        }
        onKeyUpValue(target.value);
        target.value = '';
    };

    return (
        <>
            <Select
                options={options}
                name="filterConditions"
                onChange={onChangeCondition}
                defaultValue={condition.Comparator.value}
            />

            <div className="flex-autogrid onmobile-flex-column w100 mb1">
                <ul className="flex-autogrid-item m0 p0 ml1">
                    {condition.Values.map((value, i) => {
                        return <ConditionValue value={value} onClick={handleClick} key={'index' + i} />;
                    })}
                </ul>

                <Input
                    id="textOrPattern"
                    type="text"
                    className="flex-autogrid-item"
                    onKeyUp={handleKeyUp}
                    placeholder={c('New Label form').t('Text or pattern')}
                    required={true}
                />
            </div>
        </>
    );
}

FilterConditionValues.propTypes = {
    condition: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    onClickValue: PropTypes.func,
    onChangeCondition: PropTypes.func,
    onKeyUpValue: PropTypes.func
};

FilterConditionValues.defaultProps = {
    onClickValue: noop,
    onChangeCondition: noop,
    onKeyUpValue: noop
};

export default FilterConditionValues;
