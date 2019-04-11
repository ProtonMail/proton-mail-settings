import React from 'react';
import { c } from 'ttag';
import { SortableContainer } from 'react-sortable-hoc';
import { Icon } from 'react-components';

import LabelSortableItem from './LabelSortableItem';

export default SortableContainer(({ items, onEditLabel, onRemoveLabel, onToggleChange }) => {
    return (
        <table className="pm-simple-table noborder border-collapse mt1">
            <caption className="sr-only">{c('Settings/labels').t('Labels/Folders')}</caption>
            <thead>
                <tr>
                    <th scope="col" className="w5">
                        <Icon name="what-is-this" />
                    </th>
                    <th scope="col" className="w45">
                        {c('Settings/labels - table').t('Name')}
                    </th>
                    <th scope="col" className="w15">
                        {c('Settings/labels - table').t('Notification')}
                    </th>
                    <th scope="col" className="w30">
                        {c('Settings/labels - table').t('Action')}
                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((label, index) => (
                    <LabelSortableItem
                        key={`item-${index}`}
                        index={index}
                        label={label}
                        onToggleChange={onToggleChange}
                        onEditLabel={onEditLabel}
                        onRemoveLabel={onRemoveLabel}
                    />
                ))}
            </tbody>
        </table>
    );
});
