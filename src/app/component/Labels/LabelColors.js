import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';

const LABEL_COLORS = [
    '#7272a7',
    '#8989ac',

    '#cf5858',
    '#cf7e7e',

    '#c26cc7',
    '#c793ca',

    '#7569d1',
    '#9b94d1',

    '#69a9d1',
    '#a8c4d5',

    '#5ec7b7',
    '#97c9c1',

    '#72bb75',
    '#9db99f',

    '#c3d261',
    '#c6cd97',

    '#e6c04c',
    '#e7d292',

    '#e6984c',
    '#dfb286'
];

function LabelColors({ selected, onClick, className }) {
    const getClass = (className, more) => {
        return [className, more]
            .filter(Boolean)
            .join(' ');
    }
    return (<ul className={getClass("LabelColors-container unstyled", className)} >
        { LABEL_COLORS.map((color, i) => {
            return (<li
                onClick={onClick(color)}
                key={'mykey' + i}
                className={getClass('LabelColors-item', selected === color && 'selected')}
                style={{ color }}>
                <Input
                    type="radio"
                    value={color}
                    name="paletteColor"
                    aria-labelledby="Color {color}"
                    className="LabelColors-input-color" />
                <div className="LabelColors-item-mask flex">
                    <Icon name="on" style={{margin: 'auto'}}/>
                </div>
            </li>);
        }) }
    </ul>);
}

LabelColors.propTypes = {
    selected: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

LabelColors.defaultProps = {
    selected: false
};

export default LabelColors;
