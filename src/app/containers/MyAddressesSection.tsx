import React from 'react';
import { c } from 'ttag';
import {
    Block,
    Loader,
    AddressesWithUser,
    AddressModal,
    Alert,
    PrimaryButton,
    useUser,
    useMembers,
    useModals,
    useOrganization,
    useOrganizationKey,
    useNotifications,
} from 'react-components';
import { MEMBER_PRIVATE } from 'proton-shared/lib/constants';

const MyAddressesSection = () => {
    const [user] = useUser();
    const { createModal } = useModals();
    const [members, loadingMembers] = useMembers();
    const [organization, loadingOrganization] = useOrganization();
    const [organizationKey, loadingOrganizationKey] = useOrganizationKey(organization);
    const member = (members || []).find(({ Self }) => Self);
    const loading = loadingMembers || loadingOrganization || loadingOrganizationKey;
    const { createNotification } = useNotifications();

    const handleAddAddress = () => {
        if (!member) {
            throw new Error('Missing member');
        }
        if (member.Private === MEMBER_PRIVATE.READABLE && !organizationKey?.privateKey) {
            createNotification({ type: 'error', text: c('Error').t`The organization key must be activated first.` });
            throw new Error('Organization key is not decrypted');
        }
        createModal(<AddressModal member={member} organizationKey={organizationKey} />);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <Alert>{c('Info')
                .t`Premium plans let you add multiple email addresses to your account. All the emails associated with them will appear in the same mailbox. If you are the admin of a Professional or Visionary plan, you can manage email addresses for each user in your organization. The email address at the top of the list will automatically be selected as the default email address.`}</Alert>
            {user.isAdmin && !user.isSubUser ? (
                <Block>
                    <PrimaryButton onClick={() => handleAddAddress()}>{c('Action').t`Add address`}</PrimaryButton>
                </Block>
            ) : null}
            <AddressesWithUser user={user} />
        </>
    );
};

export default MyAddressesSection;
