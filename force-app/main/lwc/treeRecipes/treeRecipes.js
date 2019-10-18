import { LightningElement } from 'lwc';

export default class TreeRecipes extends LightningElement {
    items = [
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
                            expanded: true,
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
                                                        'CTO-MGR-1-ASM-1-SUP-1-STA-1',
                                                },
                                                {
                                                    label: 'Staff 2',
                                                    name:
                                                        'CTO-MGR-1-ASM-1-SUP-1-STA-2',
                                                },
                                            ],
                                        },
                                    ],
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
                                                        'CTO-MGR-1-ASM-2-SUP-1-STA-1',
                                                },
                                                {
                                                    label: 'Staff 2',
                                                    name:
                                                        'CTO-MGR-1-ASM-2-SUP-1-STA-2',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            label: 'Manager 2',
                            name: 'CTO-MGR-2',
                            expanded: true,
                            items: [],
                        },
                    ],
                },
            ],
        },
        {
            label: 'CFO',
            name: 'CFO',
            expanded: false,
            items: [
                {
                    label: 'Director',
                    name: 'CFO-DIR',
                    expanded: false,
                    items: [
                        {
                            label: 'Manager 1',
                            name: 'CFO-MGR-1',
                            expanded: false,
                            items: [
                                {
                                    label: 'Assistant Manager 1',
                                    name: 'CFO-ASM-1',
                                },
                            ],
                        },
                        {
                            label: 'Manager 2',
                            name: 'CFO-MGR-2',
                        },
                    ],
                },
            ],
        },
    ];
}
