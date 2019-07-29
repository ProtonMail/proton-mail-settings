import React from 'react';
import { APPS } from 'proton-shared/lib/constants';
import { MainLogo, UserDropdown } from 'react-components';
import { c } from 'ttag';

const PrivateHeader = () => {
    return (
        <header className="header flex flex-nowrap reset4print">
            <MainLogo currentApp={APPS.PROTONMAIL_SETTINGS} url="/inbox" />
            <div className="searchbox-container"></div>
            <div className="topnav-container flex-item-centered-vert flex-item-fluid">
                <ul className="topnav-list unstyled mt0 mb0 ml1 flex flex-nowrap">
                    <li className="mr1">
                        <a href="/inbox" className="topnav-link inline-flex flex-nowrap nodecoration rounded">
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p topnav-icon mr0-5 flex-item-centered-vert fill-white"
                                role="img"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <use xlinkHref="#shape-email" />
                            </svg>
                            {c('Title').t`Mailbox`}
                        </a>
                    </li>
                    <li className="mr1">
                        <a
                            href="/settings/"
                            className="topnav-link inline-flex flex-nowrap nodecoration rounded"
                            aria-current="true"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p topnav-icon mr0-5 flex-item-centered-vert fill-white"
                                role="img"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <use xlinkHref="#shape-settings-master" />
                            </svg>
                            {c('Title').t`Settings`}
                        </a>
                    </li>
                    <li className="mlauto mtauto mbauto relative flex-item-noshrink">
                        <UserDropdown />
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default PrivateHeader;
