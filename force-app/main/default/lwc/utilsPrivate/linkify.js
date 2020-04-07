/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    urlRegexString,
    newLineRegexString,
    emailRegexString,
    createHttpHref,
    createEmailHref
} from './linkUtils';

const linkRegex = new RegExp(
    `(${newLineRegexString})|${urlRegexString}|${emailRegexString}`,
    'gi'
);

const linkRegexNoNewLine = new RegExp(
    `${urlRegexString}|${emailRegexString}`,
    'gi'
);

const emailRegex = new RegExp(emailRegexString, 'gi');
const newLineRegex = new RegExp(newLineRegexString, 'gi');

function getTextPart(text) {
    return {
        isText: true,
        value: text
    };
}

function getUrlPart(url, index) {
    return {
        isLink: true,
        value: url,
        href: createHttpHref(url),
        key: `${url}-${index}`
    };
}

function getEmailPart(email, index) {
    return {
        isLink: true,
        value: email,
        href: createEmailHref(email),
        key: `${email}-${index}`
    };
}

function getNewlinePart(index) {
    return {
        isNewline: true,
        key: index
    };
}

function getLinkPart(link, index, ignoreNewLines) {
    if (!ignoreNewLines && link.match(newLineRegex)) {
        return getNewlinePart(index);
    } else if (link.match(emailRegex)) {
        return getEmailPart(link, index);
    }
    return getUrlPart(link, index);
}

export function parseToFormattedLinkifiedParts(text, ignoreNewLines = false) {
    const parts = [];
    const re = ignoreNewLines ? linkRegexNoNewLine : linkRegex;
    let match;
    let index = 0;
    while ((match = re.exec(text)) !== null) {
        let link = match[0];
        const endsWithQuote = link && link.endsWith('&quot');

        if (match.index > 0) {
            parts.push(getTextPart(text.slice(0, match.index)));
        }
        if (endsWithQuote) {
            link = link.slice(0, link.lastIndexOf('&quot'));
        }
        parts.push(getLinkPart(link, index, ignoreNewLines));

        if (endsWithQuote) {
            parts.push(getTextPart('&quot'));
        }
        text = text.substring(re.lastIndex);
        re.lastIndex = 0;
        index = index + 1;
    }
    if (text != null && text !== '') {
        parts.push(getTextPart(text));
    }
    return parts;
}

export function parseToFormattedParts(text) {
    return text.split(newLineRegex).map((part, index) => {
        return index % 2 === 0 ? getTextPart(part) : getNewlinePart();
    });
}