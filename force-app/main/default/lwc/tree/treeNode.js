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

    href: node.href || 'javascript:void(0)',
    isDisabled: node.disabled || false,
    visible: level === 1,
    children: [],
    visibleItems: [],
    nodeRef: node,
    isLeaf:
      !node.items || (Array.isArray(node.items) && node.items.length === 0),
    get isExpanded() {
      return this.isLeaf ? true : node.expanded || false;
    },
    focusedChild: null,
    get strexpanded() {
      return (this.isLeaf ? true : this.nodeRef.expanded || false).toString();
    }
  };
}
