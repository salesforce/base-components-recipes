/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track } from 'lwc';

export default class IconRecipes extends LightningElement {
    @track likeState = false;
    @track answerState = false;
    @track likeStateInverse = false;
    @track answerStateInverse = false;
    @track likeStateFilled = false;
    @track answerStateFilled = false;

    handleLikeButtonClick() {
        this.likeState = !this.likeState;
    }

    handleAnswerButtonClick() {
        this.answerState = !this.answerState;
    }

    handleLikeButtonInverseClick() {
        this.likeStateInverse = !this.likeStateInverse;
    }

    handleAnswerButtonInverseClick() {
        this.answerStateInverse = !this.answerStateInverse;
    }

    handleLikeButtonFilledClick() {
        this.likeStateFilled = !this.likeStateFilled;
    }

    handleAnswerButtonFilledClick() {
        this.answerStateFilled = !this.answerStateFilled;
    }
}
