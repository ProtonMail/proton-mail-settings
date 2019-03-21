import React from 'react';
import { addLocale, useLocale } from 'ttag';

import frLocale from '../i18n/fr.po';
import ContentContainer from './content/Container';

export default () => {
    addLocale('fr', frLocale);
    useLocale('fr');

    return () => {
        return <ContentContainer />;
    };
};
