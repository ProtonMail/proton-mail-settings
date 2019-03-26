import React from 'react';
import { c } from 'ttag';
import { SubTitle, Bordered, Button, Icon, PrimaryButton } from 'react-components';

function SpamListItem({ list, type, dest, onClickMoveTo, onClickRemove, onClickAdd }) {
    const iconName = type === 'whitelist' ? `arrow-right` : `arrow-left`;
    const I18N = {
        whitelist: c('Title').t('Whitelist'),
        blacklist: c('Title').t('BlackList')
    };

    return (
        <Bordered className="flex-autogrid-item SpamListItem-container">
            <header className="flex">
                <SubTitle>{I18N[type]}</SubTitle>
                <PrimaryButton onClick={onClickAdd(type)} className="mlauto">
                    {c('Action').t('Add')}
                </PrimaryButton>
            </header>
            <ul className="unstyled scroll-if-needed SpamListItem-list p1">
                {list.map((mail, i) => {
                    return (
                        <li className="flex" key={mail.ID}>
                            <span className="ellipsis">{mail.Email}</span>
                            <Button onClick={onClickMoveTo(dest, mail)} className="mlauto mr1">
                                <Icon name={iconName} />
                            </Button>
                            <Button onClick={onClickRemove(mail)}>
                                <Icon name="close" />
                            </Button>
                        </li>
                    );
                })}
            </ul>
        </Bordered>
    );
}

export default SpamListItem;
