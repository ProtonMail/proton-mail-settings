import { useState } from 'react';
import moment from 'moment';

const toModel = (AutoResponder) => {
    const start = AutoResponder.StartTime * 1000;
    const end = AutoResponder.EndTime * 1000;

    const startDate = moment(start)
        .startOf('day')
        .valueOf();
    const endDate = moment(end)
        .startOf('day')
        .valueOf();
    const startTime =
        moment(start)
            .startOf('hour')
            .add(30 * Math.floor(moment(start).minutes() / 30), 'minutes')
            .valueOf() - startDate;
    const endTime =
        moment(end)
            .startOf('hour')
            .add(30 * Math.floor(moment(end).minutes() / 30), 'minutes')
            .valueOf() - endDate;

    return {
        message: AutoResponder.Message,
        duration: AutoResponder.Repeat,
        daysOfWeek: AutoResponder.DaysSelected,
        timeZone: AutoResponder.Zone,
        subject: AutoResponder.Subject,
        enabled: AutoResponder.IsEnabled,

        startDate,
        endDate,
        startTime,
        endTime
    };
};

const toAutoResponder = (model) => ({
    Message: model.message,
    Repeat: model.duration,
    DaysSelected: model.daysOfWeek,
    Zone: model.timeZone,
    Subject: model.subject,
    IsEnabled: model.enabled,
    StartTime: (model.startDate + model.startTime) / 1000,
    EndTime: (model.endDate + model.endTime) / 1000
});

const useAutoReplyForm = (AutoResponder) => {
    const [model, setModel] = useState(() => toModel(AutoResponder));
    const updateModel = (key) => (value) => setModel((prev) => ({ ...prev, [key]: value }));
    const resetModel = (newAutoResponder) => setModel(toModel(newAutoResponder || AutoResponder));

    return {
        model,
        toAutoResponder,
        updateModel,
        resetModel
    };
};

export default useAutoReplyForm;
