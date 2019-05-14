import React, { useState } from 'react';
import codemirror from 'codemirror';
import PropTypes from 'prop-types';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Icon, useApiWithoutResult } from 'react-components';
import { noop, debounce } from 'proton-shared/lib/helpers/function';
import { normalize } from 'proton-shared/lib/filters/sieve';
import { FILTER_VERSION } from 'proton-shared/lib/constants';
import { checkSieveFilter } from 'proton-shared/lib/api/filters';

import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/lint/lint';
import 'codemirror/mode/sieve/sieve';

/*
    You need to restrict the loading of the hook to have it done only once,
    else Infinite loop FTW :/
 */
let done = false;
function FilterEditorSieve({ filter, onChange }) {
    const clean = normalize();

    if (!done) {
        const { request } = useApiWithoutResult(checkSieveFilter);

        const lint = async (text, Version = FILTER_VERSION) => {
            const data = await request({ Version, Sieve: text });
            return data.Issues || [];
        };

        codemirror.registerHelper('lint', 'sieve', (text) => {
            console.log('LINT', text);
            if (text.trim() === '') {
                const [line = ''] = text.split('\n');
                return [
                    {
                        message: 'A sieve script cannot be empty',
                        severity: 'error',
                        from: codemirror.Pos(0, 0),
                        to: codemirror.Pos(0, line.length)
                    }
                ];
            }
            return lint(text);
        });

        done = true;
    }

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
