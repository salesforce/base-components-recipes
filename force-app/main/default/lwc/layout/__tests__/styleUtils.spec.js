/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { normalizeParam, computeLayoutClass } from '../styleUtils';

describe('normalizeParam', () => {
    it('should set to fallback value if not valid options', () => {
        const actual = normalizeParam('a', [
            'auto',
            'shrink',
            'no-shrink',
            'grow',
            'no-grow'
        ]);

        expect(actual).toEqual(' ');
    });

    it('should return lowercase', () => {
        const actual = normalizeParam('AUTO', [
            'auto',
            'shrink',
            'no-shrink',
            'grow',
            'no-grow'
        ]);

        expect(actual).toEqual('auto');
    });

    it('should return given fallback value', () => {
        const actual = normalizeParam(
            'AUTOoo',
            ['auto', 'shrink', 'no-shrink', 'grow', 'no-grow'],
            'default'
        );

        expect(actual).toEqual('default');
    });
});

describe('computeLayoutClass', () => {
    it('should compute default layout', () => {
        expect(computeLayoutClass().toString()).toEqual('slds-grid');
    });
    it('should compute halign layout', () => {
        expect(computeLayoutClass('center').toString()).toEqual(
            'slds-grid slds-grid_align-center'
        );
    });

    it('should compute valign layout', () => {
        expect(computeLayoutClass(null, 'start').toString()).toEqual(
            'slds-grid slds-grid_vertical-align-start'
        );
    });

    it('should compute boundary layout', () => {
        expect(computeLayoutClass(null, null, 'small').toString()).toEqual(
            'slds-grid slds-grid_pull-padded'
        );
    });

    it('should compute all layout', () => {
        expect(computeLayoutClass('space', 'end', 'large').toString()).toEqual(
            'slds-grid slds-grid_align-space slds-grid_vertical-align-end slds-grid_pull-padded-large'
        );
    });
});
