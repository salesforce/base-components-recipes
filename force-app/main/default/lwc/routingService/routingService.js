/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const GET_LINK_INFO_EVENT = 'lightningroutingservicegetlinkinfo';

export const urlTypes = {
    standard: 'standard_webPage'
};

export class LinkInfo {
    constructor(url, dispatcher) {
        this.url = url;
        this.dispatcher = dispatcher;
        Object.freeze(this);
    }
}

export function registerLinkProvider(element, providerFn) {
    element.addEventListener(GET_LINK_INFO_EVENT, providerFn);
}

export function unregisterLinkProvider(element, providerFn) {
    element.removeEventListener(GET_LINK_INFO_EVENT, providerFn);
}

export function getLinkInfo(element, stateRef) {
    return new Promise((resolve, reject) => {
        // eslint-disable-next-line lightning-global/no-custom-event-identifier-arguments
        const getLinkInfoEvent = new CustomEvent(GET_LINK_INFO_EVENT, {
            detail: {
                stateRef,
                callback: (err, linkInfo) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(linkInfo);
                    }
                }
            },

            bubbles: true,
            composed: true,
            cancelable: true
        });

        element.dispatchEvent(getLinkInfoEvent);
    });
}

export function updateRawLinkInfo(element, { url, target }) {
    if (url === undefined || url === null) {
        // eslint-disable-next-line no-console
        console.error('url must be specified');
    }
    if (target && target !== '_self') {
        return new Promise((resolve) => {
            resolve({ url, dispatcher: () => {} });
        });
    }

    return getLinkInfo(element, {
        stateType: urlTypes.standard,
        attributes: {
            url,
            target
        }
    });
}
