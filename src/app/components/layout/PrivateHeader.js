import React from 'react';
import { MainLogo, UserDropdown, SupportDropdown } from 'react-components';
import { Link } from 'react-router-dom';
import { c } from 'ttag';

const PrivateHeader = () => {
    return (
        <header className="header flex flex-nowrap reset4print">
            <MainLogo url="/inbox" />
            <div className="searchbox-container"></div>
            <div className="topnav-container flex-item-centered-vert flex-item-fluid">
                <ul className="topnav-list unstyled mt0 mb0 ml1 flex flex-nowrap">
                    <li className="mr1">
                        <a href="/inbox" className="topnav-link inline-flex flex-nowrap nodecoration rounded">
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p flex-item-noshrink topnav-icon mr0-5 flex-item-centered-vert fill-white"
                                role="img"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <use xlinkHref="#shape-email" />
                            </svg>
                            <span className="navigation-title topnav-linkText">{c('Title').t`Mailbox`}</span>
                        </a>
                    </li>
                    <li className="mr1">
                        <Link
                            to="/settings"
                            className="topnav-link inline-flex flex-nowrap nodecoration rounded"
                            aria-current="true"
                        >
                            <svg
                                viewBox="0 0 16 16"
                                className="icon-16p flex-item-noshrink topnav-icon mr0-5 flex-item-centered-vert fill-white"
                                role="img"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <use xlinkHref="#shape-settings-master" />
                            </svg>
                            <span className="navigation-title topnav-linkText">{c('Title').t`Settings`}</span>
                        </Link>
                    </li>
                    <li className="mr1">
                        <SupportDropdown />
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
