import React from 'react';
import { chunk } from 'proton-shared/lib/helpers/array';
import { Link } from 'react-router-dom';

import pages from '../pages';

const ITEM_PER_ROW = 4;

const buildSections = ({ text, route, sections = [] }) => {
    const list = sections.length ? sections : [{ text, route }];

    return (
        <ul>
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
        <>
            {chunk(pages, ITEM_PER_ROW).map((items, index) => {
                return (
                    <div key={index.toString()} className="flex-autogrid">
                        {items.map(({ text, route, sections }) => {
                            return (
                                <div key={route} className="flex-autogrid-item">
                                    <h3>{text}</h3>
                                    {buildSections({ text, route, sections })}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </>
    );
};

export default OverviewContainer;
