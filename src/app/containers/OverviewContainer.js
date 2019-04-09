import React from 'react';
import { Link } from 'react-router-dom';

import pages from '../pages';

const buildSections = ({ text, route, sections = [] }) => {
    const list = sections.length ? sections : [{ text, route }];

    return (
        <ul className="unstyled mt0-5">
            {list.map(({ text, route }) => {
                return (
                    <li key={route}>
                        <Link to={route}>{text}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

const OverviewContainer = () => {
    return (
        <div className="settings-grid-container">
            {pages.map(({ text, route, sections = [] }) => {
                return (
                    <div key={route} className={`setting-grid ${sections.length > 4 ? 'setting-grid--tall' : ''}`}>
                        <h2 className="h6 mb0-5">
                            <strong>{text}</strong>
                        </h2>
                        {buildSections({ text, route, sections })}
                    </div>
                );
            })}
        </div>
    );
};

export default OverviewContainer;
