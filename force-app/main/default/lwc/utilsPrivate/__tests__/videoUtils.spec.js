/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

import { hasOnlyAllowedVideoIframes } from '../videoUtils';

describe('hasOnlyAllowedVideoIframes()', () => {
    it('Should return true when there is one iframe with source https://www.youtube.com with https protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.youtube.com" />'
            )
        ).toBe(true);
    });
    it('Should return true when there is one iframe with source https://www.youtube.com/embed/some_vide0 with a path', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.youtube.com/embed/some_vide0" />'
            )
        ).toBe(true);
    });

    it('Should return true when there is one iframe with source https://player.vimeo.com with https protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://player.vimeo.com" />'
            )
        ).toBe(true);
    });
    it('Should return true when there is one iframe with source https://player.vimeo.com/video/my_vide0 with a path', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://player.vimeo.com/video/my_vide0" />'
            )
        ).toBe(true);
    });

    it('Should return true when there is one iframe with source https://play.vidyard.com with https protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://play.vidyard.com" />'
            )
        ).toBe(true);
    });
    it('Should return true when there is one iframe with source https://play.vidyard.com/a_vide0 with a path', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://play.vidyard.com/a_vide0" />'
            )
        ).toBe(true);
    });

    it('Should return true when there are 3 iframes with sources from Youtube, Vimeo and Vidyard', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.youtube.com/embed/some_vide0" /><iframe src="https://player.vimeo.com/video/my_vide0" /><iframe src="https://play.vidyard.com/a_vide0" />'
            )
        ).toBe(true);
    });

    it('Should return false when there is one iframe with source https://abcwww.youtube.com" - extra text before the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://abcwww.youtube.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://www.tv.youtube.com" - extra text in the middle of the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.tv.youtube.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://www.youtube.comet" - extra text after the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.youtube.comet" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://youtube.com" - without www', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="https://youtube.com" />')
        ).toBe(false);
    });
    it('Should return true when there is one iframe with source http://www.youtube.com with http protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="http://www.youtube.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source www.youtube.com" - source without protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="www.youtube.com" />')
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://m.youtube.com" - no www and with a subdomain', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="https://m.youtube.com" />')
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://youtu.be" - shortened youtube url', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="https://youtu.be" />')
        ).toBe(false);
    });

    it('Should return false when there is one iframe with source https://www.player.vimeo.com - extra text before the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.player.vimeo.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://player.my.vimeo.com - extra text in the middle of the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://player.my.vimeo.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://player.vimeo.comet - extra text after the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://player.vimeo.comet" />'
            )
        ).toBe(false);
    });
    it('Should return true when there is one iframe with source http://player.vimeo.com with http protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="http://player.vimeo.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source player.vimeo.com - without protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="player.vimeo.com" />')
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://vimeo.com - without subdomain `player`', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="https://vimeo.com" />')
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://www.vimeo.com - with www instead of subdomain `player`', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="https://www.vimeo.com" />')
        ).toBe(false);
    });

    it('Should return false when there is one iframe with source https://www.play.vidyard.com - extra text before the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.play.vidyard.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://play.my.vidyard.com - extra text in the middle of the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://play.my.vidyard.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://play.vidyard.comet - extra text after the matching string', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://play.vidyard.comet" />'
            )
        ).toBe(false);
    });
    it('Should return true when there is one iframe with source http://play.vidyard.com with http protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="http://play.vidyard.com" />'
            )
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source play.vidyard.com - without protocol', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="play.vidyard.com" />')
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://vidyard.com - without subdomain `play`', () => {
        expect(
            hasOnlyAllowedVideoIframes('<iframe src="https://vidyard.com" />')
        ).toBe(false);
    });
    it('Should return false when there is one iframe with source https://www.vidyard.com - with www isntead of subdomain `play`', () => {
        expect(
            hasOnlyAllowedVideoIframes(
                '<iframe src="https://www.vidyard.com" />'
            )
        ).toBe(false);
    });
});
