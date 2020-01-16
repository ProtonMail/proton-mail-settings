import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { LabelsSection } from 'react-components';

import Page from '../components/Page';

export const getLabelsPage = () => {
    return {
        text: c('Title').t`Folders/labels`,
        route: '/settings/labels',
        icon: 'folder-label',
        sections: [
            {
                text: c('Title').t`Folders and labels`,
                id: 'folderlist'
            }
        ]
    };
};

const FoldersLabelsContainer = ({ setActiveSection }) => {
    return (
        <Page config={getLabelsPage()} setActiveSection={setActiveSection}>
            <LabelsSection />
        </Page>
    );
};

FoldersLabelsContainer.propTypes = {
    setActiveSection: PropTypes.func.isRequired
};

export default FoldersLabelsContainer;
