import React from 'react';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import { Button } from 'react-components';

const InfoLine = ({ label, children, plain }) => (
    <tr className="mb1 w100">
        <td className="pr1">{label}</td>
        <td className={`w100 ${plain ? '' : 'bold'}`}>{children}</td>
    </tr>
);

const AutoReplyTemplate = ({ duration, start, end, timezone, message, address, status, onDelete, onEdit }) => {
    return (
        <div className="bordered-container p2">
            <table>
                <tbody>
                    <InfoLine label={c('Label').t`Address`}>{address}</InfoLine>
                    <InfoLine label={c('Label').t`Status`}>{status}</InfoLine>
                    <InfoLine label={c('Label').t`Duration`}>{duration}</InfoLine>
                    <InfoLine label={c('Label').t`Start`}>{start}</InfoLine>
                    <InfoLine label={c('Label').t`End`}>{end}</InfoLine>
                    <InfoLine label={c('Label').t`Timezone`}>{timezone}</InfoLine>
                    <InfoLine plain label={c('Label').t`Message`}>
                        {message}
                    </InfoLine>
                </tbody>
            </table>
            <div className="flex w100">
                <div className="mlauto">
                    <Button onClick={onDelete}>Delete</Button>
                    <Button onClick={onEdit} className="ml1">
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    );
};

AutoReplyTemplate.propTypes = {
    duration: PropTypes.any,
    start: PropTypes.any,
    end: PropTypes.any,
    timezone: PropTypes.any,
    message: PropTypes.any,
    address: PropTypes.any,
    status: PropTypes.any,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

export default AutoReplyTemplate;
