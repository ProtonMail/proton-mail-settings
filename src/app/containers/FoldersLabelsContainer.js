import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { LabelsSection, FoldersSection } from 'react-components';

import Page from '../components/Page';

export const getLabelsPage = () => {
    return {
        text: c('Title').t`Folders/labels`,
        route: '/settings/labels',
        icon: 'folder-label',
        sections: [
            {
                text: c('Title').t`Folders`,
                id: 'folderlist'
            },
            {
                text: c('Title').t`Labels`,
                id: 'labellist'
            }
        ]
    };
};

const FoldersLabelsContainer = ({ setActiveSection }) => {
    return (
        <Page config={getLabelsPage()} setActiveSection={setActiveSection}>
            <FoldersSection />
            <LabelsSection />
        </Page>
    );
};

FoldersLabelsContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default FoldersLabelsContainer;
