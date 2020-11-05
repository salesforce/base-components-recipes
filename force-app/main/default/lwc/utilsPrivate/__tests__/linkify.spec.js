/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import {
    parseToFormattedLinkifiedParts,
    parseToFormattedParts
} from '../linkify';

function isUrl(url) {
    return url.isLink && url.href.includes('://');
}

function isEmail(url) {
    return url.isLink && url.href.includes('mailto:');
}

const TEST_URL = 'www.a36578si0as.com';
const TEST_EMAIL = '460920a@ssas340cas.com';

describe('parseToFormattedLinkifiedParts: Edge cases', () => {
    it('Works with empty string', () => {
        const parts = parseToFormattedLinkifiedParts('');
        expect(parts).toHaveLength(0);
    });

    it('Works with no matches', () => {
        const parts = parseToFormattedLinkifiedParts('Hello!');
        expect(parts).toHaveLength(1);
    });

    it('Works with only match', () => {
        const parts = parseToFormattedLinkifiedParts(TEST_URL);
        expect(parts).toHaveLength(1);
    });
});

describe('parseToFormattedLinkifiedParts properly returns parts', () => {
    const url = TEST_URL;
    const email = TEST_EMAIL;
    const testParts = [
        { isText: true, type: 'isText', value: 'I need to visit ' },
        { url: true, type: 'url', value: url, href: `http://${url}` },
        { isText: true, type: 'isText', value: ' ' },
        { newline: true, type: 'newline' },
        {
            isText: true,
            type: 'isText',
            value: ' that is very important to read '
        },

        { email: true, type: 'email', value: email },
        { isText: true, type: 'isText', value: ' and thank you ' }
    ];

    const text = testParts.map((v) => v.value || '\n').join('');
    const parts = parseToFormattedLinkifiedParts(text);

    it('generates right total amount of parts', () => {
        expect(parts).toHaveLength(testParts.length);
    });

    it('generates url node from a URL', () => {
        expect(parts.filter((p) => isUrl(p))).toHaveLength(1);
    });

    it('generates email node from a URL', () => {
        expect(parts.filter((p) => isEmail(p))).toHaveLength(1);
    });

    it('generates newline node from a URL', () => {
        expect(parts.filter((p) => p.isNewline)).toHaveLength(1);
    });

    it('parses URL', () => {
        expect(parts.filter((p) => isUrl(p))[0].value).toBe(url);
    });

    it('adds https', () => {
        expect(parts.filter((p) => isUrl(p))[0].href).toBe(`http://${url}`);
    });

    it('adds mailto:', () => {
        expect(parts.filter((p) => isEmail(p))[0].href).toBe(`mailto:${email}`);
    });

    it('parses email', () => {
        expect(parts.filter((p) => isEmail(p))[0].value).toBe(email);
    });
});

describe('parseToFormattedLinkifiedParts with ignoreNewLines=true', () => {
    const url = TEST_URL;
    const email = TEST_EMAIL;
    const testParts = [
        { isText: true, type: 'isText', value: 'I need to visit ' },
        { url: true, type: 'url', value: url, href: `http://${url}` },
        { isText: true, type: 'isText', value: ' ' },
        { newline: true, type: 'newline' },
        {
            isText: true,
            type: 'isText',
            value: ' that is very important to read '
        },

        { email: true, type: 'email', value: email },
        { isText: true, type: 'isText', value: ' and thank you ' }
    ];

    const text = testParts.map((v) => v.value || '\n').join('');
    const parts = parseToFormattedLinkifiedParts(text, true);

    it('should generates right total amount of parts', () => {
        expect(parts).toHaveLength(5);
    });

    it('should generate url node when there is url in the text', () => {
        expect(parts.filter((p) => isUrl(p))).toHaveLength(1);
    });

    it('should generate email node when there is email in the text', () => {
        expect(parts.filter((p) => isEmail(p))).toHaveLength(1);
    });

    it('should not generate new line part even if there is new line in the text', () => {
        expect(parts.filter((p) => p.isNewline)).toHaveLength(0);
    });

    it('should parse URL correctly when there is url in the text', () => {
        expect(parts.filter((p) => isUrl(p))[0].value).toBe(url);
    });

    it('should add https for urls with https', () => {
        expect(parts.filter((p) => isUrl(p))[0].href).toBe(`http://${url}`);
    });

    it('should add mailto: for email', () => {
        expect(parts.filter((p) => isEmail(p))[0].href).toBe(`mailto:${email}`);
    });

    it('should parse email correctly when there is email in the text', () => {
        expect(parts.filter((p) => isEmail(p))[0].value).toBe(email);
    });
});

describe('parseToFormattedLinkifiedParts properly parses urls', () => {
    const urls = Array.from({ length: 99 }, () => TEST_URL);
    const parts = parseToFormattedLinkifiedParts(
        urls.join(' ') + ' is important'
    );

    it('parses right amount of urls', () => {
        expect(parts.filter((p) => isUrl(p))).toHaveLength(urls.length);
    });

    it('parses right amount of emails', () => {
        expect(parts.filter((p) => isEmail(p))).toHaveLength(0);
    });

    it('parses right amount of isTexts', () => {
        expect(parts.filter((p) => p.isText)).toHaveLength(urls.length);
    });
});

describe('parseToFormattedLinkifiedParts properly parses emails', () => {
    const urls = Array.from({ length: 99 }, () => TEST_EMAIL);
    const parts = parseToFormattedLinkifiedParts(
        urls.join(' ') + ' is important'
    );

    it('parses right amount of emails', () => {
        expect(parts.filter((p) => isUrl(p))).toHaveLength(0);
    });

    it('parses right amount of urls', () => {
        expect(parts.filter((p) => isEmail(p))).toHaveLength(urls.length);
    });

    it('parses right amount of text parts', () => {
        expect(parts.filter((p) => p.isText)).toHaveLength(urls.length);
    });
});

describe('parseToFormattedParts properly parses spaces', () => {
    const parts = parseToFormattedParts(
        'I go to www.salesforce.com to check work items\nAnd I go to aloha.salesforce.com aloha@salesforce.com'
    );

    it('parses right amount of parts', () => {
        expect(parts).toHaveLength(3);
    });

    it('parses right amount of text parts', () => {
        expect(parts.filter((p) => p.isText)).toHaveLength(2);
    });

    it('parses right amount of new lines', () => {
        expect(parts.filter((p) => p.isNewline)).toHaveLength(1);
    });
});
