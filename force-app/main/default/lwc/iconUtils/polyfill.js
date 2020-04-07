/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import fetchSvg from './fetchSvg';
import supportsSvg from './supportsSvg';

const svgTagName = /svg/i;
const isSvgElement = el => el && svgTagName.test(el.nodeName);

const requestCache = {};
const symbolEls = {};
const svgFragments = {};

const spritesContainerId = 'slds-svg-sprites';
let spritesEl;

export function polyfill(el) {
    if (!supportsSvg && isSvgElement(el)) {
        if (!spritesEl) {
            spritesEl = document.createElement('svg');
            spritesEl.xmlns = 'http://www.w3.org/2000/svg';
            spritesEl['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
            spritesEl.style.display = 'none';
            spritesEl.id = spritesContainerId;

            document.body.insertBefore(spritesEl, document.body.childNodes[0]);
        }

        Array.from(el.getElementsByTagName('use')).forEach(use => {
            const src =
                use.getAttribute('xlink:href') || use.getAttribute('href');

            if (src) {
                const parts = src.split('#');
                const url = parts[0];
                const id = parts[1];
                const namespace = url.replace(/[^\w]/g, '-');
                const href = `#${namespace}-${id}`;

                if (url.length) {
                    if (use.getAttribute('xlink:href')) {
                        use.setAttribute('xlink:href', href);
                    } else {
                        use.setAttribute('href', href);
                    }

                    if (!requestCache[url]) {
                        requestCache[url] = fetchSvg(url);
                    }

                    requestCache[url].then(svgContent => {
                        if (!svgFragments[url]) {
                            const svgFragment = document
                                .createRange()
                                .createContextualFragment(svgContent);

                            svgFragments[url] = svgFragment;
                        }
                        if (!symbolEls[href]) {
                            const svgFragment = svgFragments[url];
                            const symbolEl = svgFragment.querySelector(
                                `#${id}`
                            );

                            symbolEls[href] = true;
                            symbolEl.id = `${namespace}-${id}`;
                            spritesEl.appendChild(symbolEl);
                        }
                    });
                }
            }
        });
    }
}