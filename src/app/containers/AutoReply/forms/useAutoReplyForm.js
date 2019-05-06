import { useState } from 'react';

const DAY = 24 * 60 * 60;

const toModel = (AutoResponder) => {
    const start = AutoResponder.StartTime * 1000;
    const end = AutoResponder.StartTime * 1000;

    const startDate = start - (start % DAY);
    const endDate = end - (end % DAY);
    const startTime = Math.floor(start - startDate);
    const endTime = Math.floor(end - endDate);

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
    StartTime: model.startDate + model.startTime,
    EndTime: model.endDate + model.endTime
});

const useAutoReplyForm = (AutoResponder) => {
    const [model, setModel] = useState(toModel(AutoResponder));
    const updateModel = (key) => (value) => setModel({ ...model, [key]: value });

    return {
        model,
        toAutoResponder,
        updateModel
    };
};

export default useAutoReplyForm;
