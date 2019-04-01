import React from 'react';
import { c } from 'ttag';
import { SortableElement } from 'react-sortable-hoc';
import { debounce } from 'proton-shared/lib/helpers/function';
import { Icon, Button, ConfirmModal } from 'react-components';

import ToggleNotify from '../Labels/ToggleNotify';
import RemoveFilter from './RemoveFilter';

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
                    <ToggleNotify
                        id={`item-${ID}`}
                        type="icon"
                        checked={Status === 1}
                        onChange={debounce(onChangeStatus(filter), 300)}
                    />
                </div>
            </td>
            <td>
                <Button onClick={onClickEdit(filter)}>{c('Action').t('Edit')}</Button>
                <Button onClick={onClickEdit(filter, 'sieve')}>{c('Action').t('Edit Sieve')}</Button>
                <RemoveFilter filter={filter} onRemoveFilter={onRemoveFilter} />
            </td>
        </tr>
    );
});
