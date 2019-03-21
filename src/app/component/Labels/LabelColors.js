import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Icon, Input } from 'react-components';
import { LABEL_COLORS } from 'proton-shared/lib/constants';

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
    selected: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

LabelColors.defaultProps = {
    selected: ''
};

export default LabelColors;
