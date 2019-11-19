/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

function computeKey(parentKey, childNum) {
    if (!parentKey) {
        return '0';
    }
    if (parentKey === '0') {
        return `${childNum}`;
    }
    return `${parentKey}.${childNum}`;
}

export function getTreeNode(node, level, parentKey, childNum) {
    return {
        name: node.name,
        label: node.label,
        metatext: node.metatext,
        level,
        key: computeKey(parentKey, childNum),
        // eslint-disable-next-line no-script-url
        href: node.href || 'javascript:void(0)',
        isDisabled: node.disabled || false,
        visible: level === 1,
        children: [],
        visibleItems: [],
        nodeRef: node,
        isLeaf:
            !node.items ||
            (Array.isArray(node.items) && node.items.length === 0),
        get isExpanded() {
            return this.isLeaf ? true : node.expanded || false;
        },
        focusedChild: null,
        get strexpanded() {
            return (this.isLeaf
                ? true
                : this.nodeRef.expanded || false
            ).toString();
        }
    };
}
