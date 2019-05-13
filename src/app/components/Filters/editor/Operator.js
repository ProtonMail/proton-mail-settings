import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Label, Select, Row } from 'react-components';
import { getI18n as getI18nFilter } from 'proton-shared/lib/filters/factory';

function OperatorEditor({ filter, onChange }) {
    const { Operator } = filter.Simple;
    const { OPERATORS } = getI18nFilter();
    const options = OPERATORS.map(({ label: text, value }) => ({ text, value }));

    const handleChange = ({ target }) => {
        const operator = OPERATORS.find(({ value }) => target.value === value);
        console.log(operator);
        onChange(operator);
    };

    return (
        <Row>
            <Label htmlFor="logic">{c('Label').t`Logic`}</Label>
            <Select
                options={options}
                name="logic"
                onChange={handleChange}
                className="mlauto"
                defaultValue={Operator.value}
            />
        </Row>
    );
}

export default OperatorEditor;
