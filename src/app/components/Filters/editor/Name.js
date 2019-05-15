import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Label, Input, Row } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

function NameEditor({ filter, onChange }) {
    const handleChange = ({ target }) => onChange(target.value);

    return (
        <Row>
            <Label htmlFor="filterName">{c('Filter label').t`Name`}</Label>
            <Input
                id="filterName"
                type="text"
                defaultValue={filter.Name}
                onChange={handleChange}
                placeholder={c('Placeholder').t('Name')}
                required
            />
        </Row>
    );
}

NameEditor.propTypes = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

NameEditor.defaultProps = {
    onChange: noop
};

export default NameEditor;
