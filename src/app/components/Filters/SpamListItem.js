import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { SubTitle, Bordered, Loader } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

import AddEmailFilterListButton from './AddEmailFilterListButton';
import MoveEmailFilteredList from './MoveEmailFilteredList';
import RemoveEmailFilteredList from './RemoveEmailFilteredList';

function SpamListItem({ list, type, dest, onAction, className, loading }) {
    const I18N = {
        whitelist: c('Title').t('Whitelist'),
        blacklist: c('Title').t('BlackList')
    };

    return (
        <Bordered className={'flex-autogrid-item '.concat(className)}>
            <header className="flex">
                <SubTitle>{I18N[type]}</SubTitle>
                <AddEmailFilterListButton type={type} onAdd={onAction('create')} className="mlauto" />
            </header>

            {loading ? (
                <Loader />
            ) : (
                <ul className="unstyled scroll-if-needed SpamListItem-list m0 mt1">
                    {list.map((mail, i) => {
                        return (
                            <li className="flex mb0-5 pl1" key={mail.ID}>
                                <span className="ellipsis">{mail.Email}</span>
                                <MoveEmailFilteredList
                                    dest={dest}
                                    type={type}
                                    email={mail}
                                    className="mlauto"
                                    onClick={onAction('move')}
                                />
                                <RemoveEmailFilteredList type={type} email={mail} onClick={onAction('remove')} />
                            </li>
                        );
                    })}

                    {!list.length && <p>{c('blacklist/whitelist').t('No email found')}</p>}
                </ul>
            )}
        </Bordered>
    );
}

SpamListItem.propTypes = {
    list: PropTypes.array.isRequired,
    className: PropTypes.string,
    loading: PropTypes.bool,
    type: PropTypes.string.isRequired,
    onAction: PropTypes.func
};

SpamListItem.defaultProps = {
    onAction: noop
};

export default SpamListItem;
