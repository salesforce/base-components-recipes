import { duration, displayDuration } from '../localizationService';
import { assert } from 'c/utilsPrivate';

const MINUTE_MILLISECONDS = 1000 * 60;

export function relativeFormat() {
    return {
        format: value => {
            const now = Date.now();
            const timestamp = Number(value);

            assert(
                isFinite(timestamp),
                `RelativeFormat: The value attribute accepts either a Date object or a timestamp, but we are getting the ${typeof value} value "${value}" instead.`
            );

            const getDiffInMinutes = (timestamp - now) / MINUTE_MILLISECONDS;
            const durationData = duration(getDiffInMinutes, 'minutes');
            return displayDuration(durationData, true);
        }
    };
}
