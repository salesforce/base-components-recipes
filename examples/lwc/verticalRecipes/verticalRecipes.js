/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track } from 'lwc';

const sections = [
    {
        label: 'Reports',
        items: [
            {
                label: 'Recent',
                name: 'default_recent',
                icon: 'utility:clock'
            },
            {
                label: 'Created by Me',
                name: 'default_created'
            },
            {
                label: 'Public Reports',
                name: 'default_public'
            },
            {
                label: 'My P1 Bugs',
                name: 'custom_p1bugs'
            }
        ]
    },

    {
        label: 'Dashboards',
        items: [
            {
                label: 'Favorites',
                name: 'default_favorites',
                icon: 'utility:favorite'
            },
            {
                label: 'Most Popular',
                name: 'custom_mostpopular'
            },
            {
                label: 'Summer Release Metrics',
                name: 'custom_newreleaseadoption'
            }
        ]
    }
];

export default class VerticalRecipes extends LightningElement {
    initiallySelected = 'default_recent';
    navigationData = sections;

    @track asyncValidation;
    @track hasBeenEdited = false;
    @track selectedItem = 'report_1';

    @track selectedItem = 'reports_recent';
    @track currentContent = 'reports_recent';
    @track updatedCount = 12;

    handleSelect(event) {
        const selected = event.detail.name;

        if (selected === 'reports_updated') {
            this.updatedCount = 0;
        }

        this.currentContent = selected;
    }

    handleClick() {
        this.hasBeenEdited = true;
    }

    handleBeforeSelect(event) {
        if (this.hasBeenEdited) {
            // Prevent the onselect handler from running
            event.preventDefault();

            this.asyncValidation = true;

            // Simulate an async operation
            // eslint-disable-next-line @lwc/lwc/no-async-operation
            setTimeout(() => {
                this.hasBeenEdited = false;
                this.selectedItem = event.detail.name;
                this.asyncValidation = false;
            }, 2000);
        }
    }
}
