import purify from './purify';

export default function sanitizeHTML(dirty, config) {
    return purify.sanitize(dirty, config);
}
