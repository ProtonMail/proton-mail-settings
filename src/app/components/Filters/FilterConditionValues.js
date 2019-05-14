import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Select } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

import EditConditionValue from './editor/EditConditionValue';
import AddConditionValue from './editor/AddConditionValue';

function FilterConditionValues({ condition, options, onDelete, onChangeCondition, onAdd, onEdit }) {
    return (
        <>
            <Select
                options={options}
                name="filterConditions"
                className="mb1"
                onChange={onChangeCondition}
                defaultValue={condition.Comparator.value}
            />

            <div className="flex flex-column w100 mb1">
                {condition.Values.map((value, i) => {
                    return (
                        <EditConditionValue
                            className="mb0-5"
                            value={value}
                            onEdit={onEdit}
                            onClickDelete={onDelete}
                            key={'index' + i}
                        />
                    );
                })}

                <AddConditionValue onAdd={onAdd} />
            </div>
        </>
    );
}

FilterConditionValues.propTypes = {
    condition: PropTypes.object.isRequired,
    options: PropTypes.array.isRequired,
    onDelete: PropTypes.func,
    onChangeCondition: PropTypes.func,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func
};

FilterConditionValues.defaultProps = {
    onDelete: noop,
    onChangeCondition: noop,
    onAdd: noop,
    onEdit: noop
};

export default FilterConditionValues;
