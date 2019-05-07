import React from 'react';
import { c } from 'ttag';
import PropTypes from 'prop-types';
import { Button } from 'react-components';
import moment from 'moment';
import { getDaysOfMonthOptions, getDurationOptions, AutoReplyDuration, DAY_MILLISECONDS } from './utils';

const InfoLine = ({ label, children, plain }) => (
    <tr className="mb1 w100 aligntop">
        <td className="pr1">{label}</td>
        <td className={`w100 ${plain ? '' : 'bold'}`}>{children}</td>
    </tr>
);

const AutoReplyTemplate = ({ autoresponder, onEdit, onDelete }) => {
    const durationLabel = getDurationOptions().find(({ value }) => value === autoresponder.Repeat).text;
    const status =
        autoresponder.Repeat === AutoReplyDuration.FIXED && moment().isAfter(autoresponder.StartTime)
            ? 'Expired'
            : autoresponder.IsEnabled
            ? 'Active'
            : 'Inactive';

    const formatTime = (time) => {
        if (autoresponder.Repeat === AutoReplyDuration.DAILY) {
            const weekdays = autoresponder.DaysSelected.map((day) => moment.weekdays(day)).join(', ');
            const hours = moment.utc(time).format('HH:mm');
            return `${weekdays} ${hours}`;
        } else if (autoresponder.Repeat === AutoReplyDuration.FIXED) {
            return moment(time).format('LLL');
        } else if (autoresponder.Repeat === AutoReplyDuration.WEEKLY) {
            const dayOfWeek = moment.weekdays(Math.floor(time / DAY_MILLISECONDS));
            const hours = moment.utc(time).format('HH:mm');
            return `${dayOfWeek} ${hours}`;
        } else if (autoresponder.Repeat === AutoReplyDuration.MONTHLY) {
            const dayOfMonth = getDaysOfMonthOptions().find(({ value }) => value === Math.floor(time / DAY)).text;
            const hours = moment.utc(time).format('HH:mm');
            return `${dayOfMonth} ${hours}`;
        } else if (autoresponder.Repeat === AutoReplyDuration.PERMANENT) {
            return '-';
        }
    };

    return (
        <div className="bordered-container p2">
            <table>
                <tbody>
                    <InfoLine label={c('Label').t`Address`}>DUMMY ADDRESS</InfoLine>
                    <InfoLine label={c('Label').t`Status`}>{status}</InfoLine>
                    <InfoLine label={c('Label').t`Duration`}>{durationLabel}</InfoLine>
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
    autoresponder: PropTypes.shape({
        DaysSelected: PropTypes.arrayOf(PropTypes.number),
        IsEnabled: PropTypes.bool,
        Repeat: PropTypes.number,
        StartTime: PropTypes.number,
        EndTime: PropTypes.number,
        Zone: PropTypes.string,
        Message: PropTypes.string
    }).isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
};

export default AutoReplyTemplate;
