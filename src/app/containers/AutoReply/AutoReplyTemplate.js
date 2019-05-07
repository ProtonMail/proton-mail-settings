import React from 'react';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import { Button } from 'react-components';
import moment from 'moment';
import { getDaysOfMonthOptions } from './utils';

const InfoLine = ({ label, children, plain }) => (
    <tr className="mb1 w100 aligntop">
        <td className="pr1">{label}</td>
        <td className={`w100 ${plain ? '' : 'bold'}`}>{children}</td>
    </tr>
);

export const duration = {
    FIXED: 0,
    DAILY: 1,
    WEEKLY: 2,
    MONTHLY: 3,
    PERMANENT: 4
};

const durationLabels = {
    [duration.FIXED]: c('Option').t`Fixed`,
    [duration.DAILY]: c('Option').t`Repeat daily`,
    [duration.WEEKLY]: c('Option').t`Repeat weekly`,
    [duration.MONTHLY]: c('Option').t`Repeat monthly`,
    [duration.PERMANENT]: c('Option').t`Permanent`
};

const DAY = 24 * 60 * 60 * 1000;

const AutoReplyTemplate = ({ autoresponder, onEdit, onDelete }) => {
    const status =
        autoresponder.Repeat === duration.FIXED && moment().isAfter(autoresponder.StartTime)
            ? 'Expired'
            : autoresponder.IsEnabled
            ? 'Active'
            : 'Inactive';

    const formatTime = (time) => {
        if (autoresponder.Repeat === duration.DAILY) {
            return moment(time).format('HH:mm');
        } else if (autoresponder.Repeat === duration.FIXED) {
            return moment(time).format('LLL');
        } else if (autoresponder.Repeat === duration.WEEKLY) {
            const dayOfWeek = moment.weekdays(Math.floor(time / DAY));
            const hours = moment.utc(time).format('HH:mm');
            return `${dayOfWeek} ${hours}`;
        } else if (autoresponder.Repeat === duration.MONTHLY) {
            const dayOfMonth = getDaysOfMonthOptions().find(({ value }) => value === Math.floor(time / DAY)).text;
            const hours = moment.utc(time).format('HH:mm');
            return `${dayOfMonth} ${hours}`;
        } else if (autoresponder.Repeat === duration.PERMANENT) {
            return '-';
        }
    };

    return (
        <div className="bordered-container p2">
            <table>
                <tbody>
                    <InfoLine label={c('Label').t`Address`}>DUMMY ADDRESS</InfoLine>
                    <InfoLine label={c('Label').t`Status`}>{status}</InfoLine>
                    <InfoLine label={c('Label').t`Duration`}>{durationLabels[autoresponder.Repeat]}</InfoLine>
                    <InfoLine label={c('Label').t`Start`}>{formatTime(autoresponder.StartTime * 1000)}</InfoLine>
                    <InfoLine label={c('Label').t`End`}>{formatTime(autoresponder.EndTime * 1000)}</InfoLine>
                    <InfoLine label={c('Label').t`Timezone`}>{autoresponder.Zone}</InfoLine>
                    <InfoLine plain label={c('Label').t`Message`}>
                        <div dangerouslySetInnerHTML={{ __html: autoresponder.Message }} />
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
    autoresponder: PropTypes.any.isRequired,
    // duration: PropTypes.any,
    // start: PropTypes.any,
    // end: PropTypes.any,
    // timezone: PropTypes.any,
    // message: PropTypes.any,
    // address: PropTypes.any,
    // status: PropTypes.any,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

export default AutoReplyTemplate;
