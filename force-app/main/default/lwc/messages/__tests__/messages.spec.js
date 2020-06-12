/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { createElement } from 'lwc';
import Element from 'c/messages';

const createMessages = () => {
    const element = createElement('c-messages', { is: Element });
    document.body.appendChild(element);
    return element;
};

describe('c-messages', () => {
    it('default', () => {
        const elem = createMessages();
        elem.setError(getErrorResponse([{ errorCode: 'foo', message: 'bar' }]));

        return Promise.resolve().then(() => {
            expect(elem).toMatchSnapshot();
        });
    });
    it('just a message', () => {
        const elem = createMessages();
        elem.setError(getErrorResponse([{ message: 'bar' }]));

        return Promise.resolve().then(() => {
            expect(elem).toMatchSnapshot();
        });
    });
    it('has no error', () => {
        const elem = createMessages();
        elem.setError(null);

        return Promise.resolve().then(() => {
            expect(elem).toMatchSnapshot();
        });
    });
});

function getErrorResponse(body) {
    return {
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        body
    };
}
