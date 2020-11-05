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
            const dispatchEvent = jest.fn((event) => {
                expect(event.bubbles).toBe(true);
                expect(event.cancelable).toBe(true);
            });
            getLinkInfo({ dispatchEvent }, stateRef);
            expect(dispatchEvent).toHaveBeenCalled();
        });

        it('passes state to event', () => {
            const dispatchEvent = (event) => {
                expect(event.detail.stateRef).toBe(stateRef);
            };
            getLinkInfo({ dispatchEvent }, stateRef);
        });

        it('returns and resolves Promise if there is no error', () => {
            const linkInfo = {
                url: 'imurl.com'
            };

            const resolveFn = jest.fn((linkInfoFromResolve) => {
                expect(linkInfoFromResolve).toBe(linkInfo);
            });
            const dispatchEvent = (event) => {
                event.detail.callback(null, linkInfo);
                expect(resolveFn).toHaveBeenCalled();
            };
            getLinkInfo({ dispatchEvent }, stateRef).then(resolveFn);
        });

        it('returns and rejects Promise if error exists', () => {
            const errorObj = {
                msg: 'oh no'
            };

            const rejectFn = jest.fn((errorObjFromReject) => {
                expect(errorObjFromReject).toBe(errorObj);
            });
            const dispatchEvent = (event) => {
                event.detail.callback(errorObj, null);
                expect(rejectFn).toHaveBeenCalled();
            };
            getLinkInfo({ dispatchEvent }, stateRef).catch(rejectFn);
        });
    });

    describe('updateRawLinkInfo', () => {
        const url = 'imurl.com';

        const target = '_self';

        it('dispatches a bubbleable, cancellable custom event when target=_self', () => {
            const dispatchEvent = jest.fn((event) => {
                expect(event.bubbles).toBe(true);
                expect(event.cancelable).toBe(true);
            });
            updateRawLinkInfo({ dispatchEvent }, { url, target });
            expect(dispatchEvent).toHaveBeenCalled();
        });

        it('dispatches a bubbleable, cancellable custom event when no target is specified (implied _self)', () => {
            const dispatchEvent = jest.fn((event) => {
                expect(event.bubbles).toBe(true);
                expect(event.cancelable).toBe(true);
            });
            updateRawLinkInfo({ dispatchEvent }, { url });
            expect(dispatchEvent).toHaveBeenCalled();
        });

        it('returns a no-op dispatcher when other targets are used', async () => {
            const otherTargets = ['_blank', 'someFrame', '_top', '_parent'];
            const dispatchEvent = jest.fn();
            for (let i = 0; i < otherTargets.length; i++) {
                await updateRawLinkInfo(
                    { dispatchEvent },
                    { url, target: otherTargets[i] }
                ).then((linkInfo) => {
                    expect(linkInfo.dispatcher).toBeDefined();
                    expect(typeof linkInfo.dispatcher).toBe('function');
                    linkInfo.dispatcher();
                });
                expect(dispatchEvent).not.toHaveBeenCalled();
            }
        });

        it('passes the correct state to event', () => {
            const dispatchEvent = (event) => {
                expect(event.detail.stateRef.stateType).toBe(urlTypes.standard);
                expect(event.detail.stateRef.attributes.url).toBe(url);
            };
            updateRawLinkInfo({ dispatchEvent }, { url, target });
        });
    });
});
