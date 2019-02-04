import moment from 'moment';

// Jan 17, 2016
export function readableTime(time) {
    const m = moment.unix(time);

    if (m.isSame(moment(), 'day')) {
        return m.format('LT');
    }

    return m.format('ll');
}
