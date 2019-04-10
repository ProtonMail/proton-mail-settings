import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Information, Paragraph, SubTitle } from 'react-components';
import { Link } from 'react-router-dom';

const RelatedSettingsAddresses = () => {
    return (
        <>
            <SubTitle>{c('Title').t`Related settings`}</SubTitle>
            <div className="flex flex-spacebetween">
                <div className="w45">
                    <Information icon="">
                        <Paragraph>{c('Info')
                            .t`Go to the Domain settings if you want to create  and manage custom domains for your users.`}</Paragraph>
                        <Paragraph>
                            <Link className="pm-button pm-button--primary" to="/settings/domains">{c('Link')
                                .t`Domains settings`}</Link>
                        </Paragraph>
                    </Information>
                </div>
                <div className="w45">
                    <Information>
                        <Paragraph>{c('Info')
                            .t`Go to Users settings if you want to create and manage the list of users in your organization.`}</Paragraph>
                        <Paragraph>
                            <Link className="pm-button pm-button--primary" to="/settings/members">{c('Link')
                                .t`Users settings`}</Link>
                        </Paragraph>
                    </Information>
                </div>
            </div>
        </>
    );
};

RelatedSettingsAddresses.propTypes = {
    id: PropTypes.string
};

export default RelatedSettingsAddresses;
