import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { SortableElement } from 'react-sortable-hoc';
import { debounce } from 'proton-shared/lib/helpers/function';
import { isComplex } from 'proton-shared/lib/filters/factory';
import { toggleEnable } from 'proton-shared/lib/api/filters';
import {
    Icon,
    Button,
    ConfirmModal,
    Toggle,
    useEventManager,
    useApiWithoutResult,
    useNotifications
} from 'react-components';

import ToggleBoolean from '../ui/ToggleBoolean';
import RemoveFilter from './RemoveFilter';
import EditFilterButton from './EditFilterButton';

function FilterItemRow({ filter }) {
    const { ID, Name, Status, Simple } = filter;
    const [toggled, setToggle] = useState(Status === 1);

    const { call } = useEventManager();
    const { createNotification } = useNotifications();
    const { request, loading } = useApiWithoutResult(toggleEnable);

    console.log('@todo load simple during the get list to prevent too many parsing of the tree');

    const handleChangeStatus = async () => {
        await request(ID, !toggled);
        setToggle(!toggled);
        call();
        createNotification({
            text: c('Success notification').t`Status updated`
        });
    };

    return (
        <tr style={{ backgroundColor: 'white', cursor: 'move' }}>
            <td>
                <Icon name="text-justify" />
            </td>
            <td>{Name}</td>
            <td>
                <div className="w10">
                    <Toggle
                        id={`item-${ID}`}
                        loading={loading}
                        checked={toggled}
                        onChange={debounce(handleChangeStatus, 300)}
                    />
                </div>
            </td>
            <td>
                {!isComplex(filter) ? <EditFilterButton filter={filter} textContent={c('Action').t('Edit')} /> : null}
                <EditFilterButton filter={filter} mode="complex" textContent={c('Action').t('Edit Sieve')} />
                <RemoveFilter filter={filter} />
            </td>
        </tr>
    );
}

FilterItemRow.propTypes = {
    filter: PropTypes.object.isRequired
};

export default SortableElement(FilterItemRow);
