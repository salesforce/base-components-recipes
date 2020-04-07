/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

let idCounter = 0;

function generateUniqueId() {
    idCounter++;
    return `node-${idCounter}`;
}

export function generateNode(
    labelPrefix,
    expanded,
    disabled,
    withMetatext = false
) {
    const node = {};
    node.name = generateUniqueId();
    const computedLabel = labelPrefix + '_' + node.name;
    node.label = computedLabel;
    node.expanded = expanded ? expanded : false;
    node.disabled = disabled ? disabled : false;
    if (withMetatext) {
        node.metatext = 'meta &middot; ' + node.name;
    }
    node.items = [];
    return node;
}

export function getTree(label, numChild, withMetatext = false) {
    const items = [];
    let node = null;
    for (let i = 0; i < numChild; i++) {
        node = generateNode(label, true, false, withMetatext);
        items.push(node);
    }
    return items;
}

export function getTreeNested(label, levelOptions, withMetatext = false) {
    const items = getTree(label, levelOptions['1'], withMetatext);
    addNodes(label, items, levelOptions, 2, withMetatext);
    return items;
}

export function getNode(items, key) {
    const childsByLevel = key.split('.');
    let item = null;
    let parent = items;
    for (let i = 0; i < childsByLevel.length; i++) {
        if (parent && Array.isArray(parent)) {
            item = parent[childsByLevel[i] - 1];
            parent = item.children;
        }
    }
    return item;
}

function addNodes(label, nodes, levelOptions, level, withMetatext = false) {
    const levelTotal = Object.keys(levelOptions).map(key =>
        Object.prototype.hasOwnProperty.call(levelOptions, key)
    ).length;
    if (level > levelTotal) {
        return;
    }
    nodes.forEach(node => {
        const children = getTree(label, levelOptions[level], withMetatext);
        node.items = node.items.concat(children);
        addNodes(label, node.items, levelOptions, level + 1, withMetatext);
    });
    level--;
}