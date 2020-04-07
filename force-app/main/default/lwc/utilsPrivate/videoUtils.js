/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const ALLOWED_DOMAINS = new Set([
    'www.youtube.com',
    'player.vimeo.com',
    'play.vidyard.com',
    'players.brightcove.net',
    'bcove.video',
    'player.cloudinary.com',
    'fast.wistia.net',
    'i1.adis.ws',
    's1.adis.ws'
]);

export function hasOnlyAllowedVideoIframes(htmlString) {
    if (htmlString && htmlString.indexOf('<iframe') > -1) {
        const parsedHtml = new DOMParser().parseFromString(
            htmlString,
            'text/html'
        );

        const iframesList = Array.prototype.slice.call(
            parsedHtml.querySelectorAll('iframe')
        );

        return (
            iframesList.length > 0 &&
            !iframesList.some(iframe => !isUrlAllowed(iframe.src))
        );
    }
    return false;
}

function isUrlAllowed(url) {
    const anchor = document.createElement('a');
    anchor.href = url;

    return anchor.protocol === 'https:' && ALLOWED_DOMAINS.has(anchor.hostname);
}
