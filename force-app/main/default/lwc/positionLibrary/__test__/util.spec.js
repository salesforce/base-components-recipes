/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { isInsideModal, normalizePosition } from './../util';

describe('c-position-library util isInsideModal', () => {
    it('should be true when inside of a modal', () => {
        const dialog = document.createElement('div');
        const modal = document.createElement('div');
        modal.className = 'uiModal';
        modal.appendChild(dialog);
        expect(isInsideModal(dialog)).toBe(true);
    });

    it('should be false when not inside of a modal', () => {
        const dialog = document.createElement('div');
        const modal = document.createElement('div');
        modal.appendChild(dialog);
        expect(isInsideModal(dialog)).toBe(false);
    });
});

describe('c-position-library util normalizePosition', () => {
    it('should default to absolute position', () => {
        const dialog = document.createElement('div');
        const modal = document.createElement('div');
        modal.className = 'anything';
        modal.appendChild(dialog);
        normalizePosition(dialog, 1, null, null);
        expect(dialog.style.position).toBe('absolute');
    });

    it('should be position fixed inside modal', () => {
        const dialog = document.createElement('div');
        const modal = document.createElement('div');
        modal.className = 'uiModal';
        modal.appendChild(dialog);
        normalizePosition(dialog, 1, null, null);
        expect(dialog.style.position).toBe('fixed');
    });

    it('should be position fixed inside panel', () => {
        const dialog = document.createElement('div');
        const modal = document.createElement('div');
        modal.className = 'uiPanel';
        modal.appendChild(dialog);
        normalizePosition(dialog, 1, null, null);
        expect(dialog.style.position).toBe('fixed');
    });
});