import {
    urlRegexString,
    emailRegexString,
    tagRegexString,
    createHttpHref,
    createEmailHref
} from 'c/utilsPrivate';

const linkRegex = new RegExp(
    `${tagRegexString}|${urlRegexString}|${emailRegexString}`,
    'gi'
);

const createHttpLink = function(match) {
    const href = createHttpHref(match);
    return `<a href="${href}" target="_blank" rel="noopener">${match}</a>`;
};

const createEmailLink = function(match) {
    const href = createEmailHref(match);
    return `<a href="${href}">${match}</a>`;
};

export const linkify = function(text) {
    if (typeof text !== 'string') {
        return '';
    }
    return text.replace(linkRegex, (match, tagMatch, hrefMatch, emailMatch) => {
        if (tagMatch) {
            return tagMatch;
        } else if (hrefMatch) {
            const endsWithQuote = hrefMatch.endsWith('&quot');
            let href = hrefMatch;
            if (endsWithQuote) {
                href = hrefMatch.slice(0, hrefMatch.lastIndexOf('&quot'));
            }
            return createHttpLink(href) + (endsWithQuote ? '&quot' : '');
        } else if (emailMatch) {
            return createEmailLink(emailMatch);
        }
        return match;
    });
};
