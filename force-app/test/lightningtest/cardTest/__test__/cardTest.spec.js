/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import CardTest from './../cardTest';
import { createElement } from 'lwc';

function createCard(props = {}) {
    const card = createElement('c-card-test', { is: CardTest });
    Object.assign(card, props);
    document.body.appendChild(card);
    return card;
}

describe('c-card using slots', () => {
    it('should render with the right markup', () => {
        const component = createCard();
        expect(component).toMatchSnapshot();
    });
});
