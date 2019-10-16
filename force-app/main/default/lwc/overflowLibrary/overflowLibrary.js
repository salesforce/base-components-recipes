export function calculateOverflow({
  items,
  activeItem,
  containerWidth,
  overflowWidth
}) {
  const visibleItems = [];
  const overflowItems = [];

  const allItemsWidth = items.reduce(
    (totalWidth, item) => totalWidth + item.width,
    0
  );

  if (allItemsWidth <= containerWidth || containerWidth <= 0) {
    return { visibleItems: items, overflowItems };
  }

  let totalWidth = overflowWidth;

  if (activeItem) {
    totalWidth += activeItem.width;
  }

  let activeItemFitsWithoutRearrangement = false;
  for (const item of items) {
    if (activeItem.value === item.value) {
      activeItemFitsWithoutRearrangement = overflowItems.length === 0;
      if (activeItemFitsWithoutRearrangement) {
        visibleItems.push(activeItem);
      }
    } else {
      const itemFits = item.width + totalWidth <= containerWidth;
      if (itemFits && overflowItems.length === 0) {
        totalWidth += item.width;
        visibleItems.push(item);
      } else {
        overflowItems.push(item);
      }
    }
  }

  if (!activeItemFitsWithoutRearrangement) {
    visibleItems.push(activeItem);
  }

  return {
    visibleItems,
    overflowItems
  };
}
