/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { getLinkInfo, updateRawLinkInfo, urlTypes } from '../routingService';

describe('routing-service', () => {
    describe('getLinkInfo', () => {
        const stateRef = {
            stateType: 'standard',
            attributes: {
                url: 'imurl.com'
            }
        };

        it('dispatches a bubbleable, cancellable custom event', () => {
            const dispatchEvent = jest.fn(event => {
                expect(event.bubbles).toBe(true);
                expect(event.cancelable).toBe(true);
            });
            getLinkInfo({ dispatchEvent }, stateRef);
            expect(dispatchEvent).toHaveBeenCalled();
        });

        it('passes state to event', () => {
            const dispatchEvent = event => {
                expect(event.detail.stateRef).toBe(stateRef);
            };
            getLinkInfo({ dispatchEvent }, stateRef);
        });

        it('returns and resolves Promise if there is no error', () => {
            const linkInfo = {
                url: 'imurl.com'
            };

            const resolveFn = jest.fn(linkInfoFromResolve => {
                expect(linkInfoFromResolve).toBe(linkInfo);
            });
            const dispatchEvent = event => {
                event.detail.callback(null, linkInfo);
                expect(resolveFn).toHaveBeenCalled();
            };
            getLinkInfo({ dispatchEvent }, stateRef).then(resolveFn);
        });

        it('returns and rejects Promise if error exists', () => {
            const errorObj = {
                msg: 'oh no'
            };

            const rejectFn = jest.fn(errorObjFromReject => {
                expect(errorObjFromReject).toBe(errorObj);
            });
            const dispatchEvent = event => {
                event.detail.callback(errorObj, null);
                expect(rejectFn).toHaveBeenCalled();
            };
            getLinkInfo({ dispatchEvent }, stateRef).catch(rejectFn);
        });
    });

    describe('updateRawLinkInfo', () => {
        const url = 'imurl.com';

        it('dispatches a bubbleable, cancellable custom event', () => {
            const dispatchEvent = jest.fn(event => {
                expect(event.bubbles).toBe(true);
                expect(event.cancelable).toBe(true);
            });
            updateRawLinkInfo({ dispatchEvent }, { url });
            expect(dispatchEvent).toHaveBeenCalled();
        });

        it('passes the correct state to event', () => {
            const dispatchEvent = event => {
                expect(event.detail.stateRef.stateType).toBe(urlTypes.standard);
                expect(event.detail.stateRef.attributes.url).toBe(url);
            };
            updateRawLinkInfo({ dispatchEvent }, { url });
        });
    });
});
