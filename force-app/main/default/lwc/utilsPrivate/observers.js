const POSITION_CHANGE_THRESHOLD = 5;
export function observePosition(
    target,
    threshold = POSITION_CHANGE_THRESHOLD,
    originalRect,
    callback
) {
    const newBoundingRect = target.getBoundingClientRect();
    const newLeft = newBoundingRect.left;
    const newTop = newBoundingRect.top;

    const oldLeft = originalRect.left;
    const oldTop = originalRect.top;

    const horizontalShiftDelta = Math.abs(newLeft - oldLeft);
    const verticalShiftDelta = Math.abs(newTop - oldTop);

    if (horizontalShiftDelta >= threshold || verticalShiftDelta >= threshold) {
        callback();
    }
}
