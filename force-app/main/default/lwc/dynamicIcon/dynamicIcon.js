/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { LightningElement, api } from 'lwc';
import { classSet } from 'c/utils';
import { normalizeString as normalize } from 'c/utilsPrivate';
import eqHtml from './eq.html';
import ellieHtml from './ellie.html';
import scoreHtml from './score.html';
import strengthHtml from './strength.html';
import trendHtml from './trend.html';
import waffleHtml from './waffle.html';
import defaultHtml from './default.html';

export default class cDynamicIcon extends LightningElement {
    @api alternativeText;

    @api type;

    @api option;

    render() {
        const { normalizedType } = this;
        switch (normalizedType) {
            case 'ellie':
                return ellieHtml;
            case 'eq':
                return eqHtml;
            case 'score':
                return scoreHtml;
            case 'strength':
                return strengthHtml;
            case 'trend':
                return trendHtml;
            case 'waffle':
                return waffleHtml;
            default:
                return defaultHtml;
        }
    }

    get normalizedType() {
        return normalize(this.type, {
            fallbackValue: '',
            validValues: ['ellie', 'eq', 'score', 'strength', 'trend', 'waffle']
        });
    }

    get normalizedOption() {
        const { normalizedType } = this;
        switch (normalizedType) {
            case 'eq':
                return normalize(this.option, {
                    fallbackValue: 'play',
                    validValues: ['play', 'stop']
                });

            case 'score':
                return normalize(this.option, {
                    fallbackValue: 'positive',
                    validValues: ['positive', 'negative']
                });

            case 'strength':
                return normalize(this.option, {
                    fallbackValue: '0',
                    validValues: ['-3', '-2', '-1', '0', '1', '2', '3']
                });

            case 'trend':
                return normalize(this.option, {
                    fallbackValue: 'neutral',
                    validValues: ['up', 'down', 'neutral']
                });

            default:
                return '';
        }
    }

    get computedEqClass() {
        const { normalizedOption } = this;
        const classes = classSet('slds-icon-eq');

        if (normalizedOption === 'play') {
            classes.add('slds-is-animated');
        }

        return classes.toString();
    }
}