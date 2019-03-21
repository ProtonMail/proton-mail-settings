import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { debounce } from 'proton-shared/lib/helpers/function';
import { Icon, Toggle, Button } from 'react-components';

export default SortableElement(({ label, onToggleChange, onClickEdit, onClickDelete }) => {
    const { ID, Name, Color, Exclusive, Notify } = label;

    return (<tr
        style={{ backgroundColor: 'white', cursor: 'move' }}>
        <td><Icon name="text-justify" /></td>
        <td>
            { Exclusive === 1 && <Icon
                name="folder"
                style={{ fill: Color }}
                className="icon-16p mr1"
                alt={Name} /> }
            { Exclusive === 0 && <Icon
                name="label"
                style={{ fill: Color }}
                className="icon-16p mr1"
                alt={Name} /> }
            { Name }
        </td>
        <td>
            <div className="w10">
                { Exclusive === 1 && <Toggle
                    id={`item-${ID}`}
                    type="icon"
                    checked={Notify === 1}
                    onChange={debounce(onToggleChange(label))}/>
                }
            </div>
        </td>
        <td>
            <Button onClick={onClickEdit(label)}>Edit</Button>
            <Button onClick={onClickDelete(label)}>Delete</Button>
        </td>
    </tr>)
});
