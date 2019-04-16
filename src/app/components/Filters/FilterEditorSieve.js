import React, { useState, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Icon } from 'react-components';
import { noop, debounce } from 'proton-shared/lib/helpers/function';
import { normalize } from 'proton-shared/lib/filters/sieve';

import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/lint/lint';
import 'codemirror/mode/sieve/sieve';

function FilterEditorSieve({ filter, onChange }) {
    const clean = normalize();

    const handleChange = (editor, opt, input) => {
        onChange(clean(input));
    };

    return (
        <CodeMirror
            value={filter.Sieve}
            options={{
                mode: 'sieve',
                lineNumbers: true,
                lineWrapping: true,
                readOnly: false,
                fixedGutter: false,
                lint: {
                    delay: 800
                },
                gutters: ['CodeMirror-lint-markers'],
                autoRefresh: true
            }}
            onChange={debounce(handleChange, 300)}
        />
    );
}

FilterEditorSieve.propTypes = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

FilterEditorSieve.defaultProps = {
    onChange: noop
};

export default FilterEditorSieve;
