/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, track } from 'lwc';

export default class TreeRecipes extends LightningElement {
    @track selectedItem = null;

    @track items = [
        {
            label: 'CTO',
            name: 'CTO',
            expanded: true,
            items: [
                {
                    label: 'Director',
                    name: 'CTO-DIR',
                    expanded: true,
                    items: [
                        {
                            label: 'Manager 1',
                            name: 'CTO-MGR-1',
                            expanded: false,
                            items: [
                                {
                                    label: 'Assistant Manager 1',
                                    name: 'CTO-ASM-1',
                                    expanded: true,
                                    items: [
                                        {
                                            label: 'Supervisor 1',
                                            name: 'CTO-MGR-1-ASM-1-SUP-1',
                                            expanded: true,
                                            items: [
                                                {
                                                    label: 'Staff 1',
                                                    name:
                                                        'CTO-MGR-1-ASM-1-SUP-1-STA-1'
                                                },
                                                {
                                                    label: 'Staff 2',
                                                    name:
                                                        'CTO-MGR-1-ASM-1-SUP-1-STA-2'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Assistant Manager 2',
                                    name: 'CTO-ASM-2',
                                    expanded: true,
                                    items: [
                                        {
                                            label: 'Supervisor 1',
                                            name: 'CTO-MGR-1-ASM-2-SUP-1',
                                            expanded: true,
                                            items: [
                                                {
                                                    label: 'Staff 1',
                                                    name:
                                                        'CTO-MGR-1-ASM-2-SUP-1-STA-1'
                                                },
                                                {
                                                    label: 'Staff 2',
                                                    name:
                                                        'CTO-MGR-1-ASM-2-SUP-1-STA-2'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Manager 2',
                            name: 'CTO-MGR-2',
                            expanded: true,
                            items: []
                        }
                    ]
                }
            ]
        },
        {
            label: 'CFO',
            name: 'CFO',
            expanded: false,
            items: [
                {
                    label: 'Director',
                    name: 'CFO-DIR',
                    expanded: true,
                    items: [
                        {
                            label: 'Manager 1',
                            name: 'CFO-MGR-1',
                            expanded: false,
                            items: [
                                {
                                    label: 'Assistant Manager 1',
                                    name: 'CFO-ASM-1'
                                }, {
                                    label: 'Assistant Manager 2',
                                    name: 'CFO-ASM-2'
                                }
                            ]
                        },
                        {
                            label: 'Manager 2',
                            name: 'CFO-MGR-2'
                        }
                    ]
                }
            ]
        }
    ];

    handleSelect(event) {
        this.selectedItem = event.detail.name;
    }

    selectDirector() {
        this.selectedItem = 'CFO-MGR-1';
    }

    toggleCTO() {
        const updatedItems = JSON.parse(JSON.stringify(this.items));
        updatedItems[0] = {
            ...updatedItems[0],
            expanded: !updatedItems[0].expanded
        };
        this.items = updatedItems;
    }
    toggleCFO() {
        const updatedItems = JSON.parse(JSON.stringify(this.items));
        updatedItems[1] = {
            ...updatedItems[1],
            expanded: !updatedItems[1].expanded
        };
        this.items = updatedItems;
    }
}
