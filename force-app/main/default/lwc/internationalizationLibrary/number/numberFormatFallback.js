import { NumberOptions } from './numberOptions';
import { getNumberFormat } from '../localizationService';

export function numberFormatFallback(options) {
    const skeleton = new NumberOptions(options).getSkeleton();
    return {
        format: value => {
            return getNumberFormat(skeleton).format(value);
        }
    };
}
