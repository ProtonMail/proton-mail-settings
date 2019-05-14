import React from 'react';
import { c } from 'ttag';
import { SortableElement } from 'react-sortable-hoc';
import { debounce } from 'proton-shared/lib/helpers/function';
import { Icon, Button, ConfirmModal } from 'react-components';

import ToggleBoolean from '../ui/ToggleBoolean';
import RemoveFilter from './RemoveFilter';
import EditFilterButton from './EditFilterButton';

export default SortableElement(({ filter, onChangeStatus, onClickEdit, onRemoveFilter }) => {
    const { ID, Name, Status } = filter;

    return (
        <tr style={{ backgroundColor: 'white', cursor: 'move' }}>
            <td>
                <Icon name="text-justify" />
            </td>
            <td>{Name}</td>
            <td>
                <div className="w10">
                    <ToggleBoolean
                        id={`item-${ID}`}
                        type="icon"
                        checked={Status === 1}
                        onChange={debounce(onChangeStatus(filter), 300)}
                    />
                </div>
            </td>
            <td>
                <EditFilterButton filter={filter} textContent={c('Action').t('Edit')} />
                <EditFilterButton filter={filter} mode="sieve" textContent={c('Action').t('Edit Sieve')} />
                <RemoveFilter filter={filter} onRemoveFilter={onRemoveFilter} />
            </td>
        </tr>
    );
});
