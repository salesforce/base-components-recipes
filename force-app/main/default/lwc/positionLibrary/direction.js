import { normalizeString } from 'c/utilsPrivate';
import { WindowManager } from './util';

const ALIGN_REGEX = /^(left|right|center)\s(top|bottom|center)$/;

export const Direction = {
  Center: 'center',
  Middle: 'middle',
  Right: 'right',
  Left: 'left',
  Bottom: 'bottom',
  Top: 'top',
  Default: 'default'
};

const VerticalMap = {
  top: Direction.Top,
  bottom: Direction.Bottom,
  center: Direction.Middle
};

const HorizontalMap = {
  left: Direction.Left,
  right: Direction.Right,
  center: Direction.Center
};

const FlipMap = {
  left: Direction.Right,
  right: Direction.Left,
  top: Direction.Bottom,
  bottom: Direction.Top,
  center: Direction.Center,
  default: Direction.Right
};

function getWindowSize() {
  return {
    width: WindowManager.window.innerWidth || document.body.clientWidth || 0,
    height: WindowManager.window.innerHeight || document.body.clientHeight || 0
  };
}

export function normalizeDirection(direction, defaultValue) {
  return normalizeString(direction, {
    fallbackValue: defaultValue || Direction.Default,
    validValues: [
      Direction.Center,
      Direction.Right,
      Direction.Left,
      Direction.Bottom,
      Direction.Top,
      Direction.Middle,
      Direction.Default
    ]
  });
}

export function mapToHorizontal(value) {
  value = normalizeDirection(value, Direction.Left);
  return HorizontalMap[value];
}

export function mapToVertical(value) {
  value = normalizeDirection(value, Direction.Left);
  return VerticalMap[value];
}

export function flipDirection(value) {
  value = normalizeDirection(value, Direction.Left);
  return FlipMap[value];
}

export function isValidDirection(value) {
  return value && value.match(ALIGN_REGEX);
}

export function checkFlipPossibility(element, target, leftAsBoundary) {
  const viewPort = getWindowSize();
  const elemRect = element.getBoundingClientRect();
  const referenceElemRect = target.getBoundingClientRect();
  const height =
    typeof elemRect.height !== 'undefined'
      ? elemRect.height
      : elemRect.bottom - elemRect.top;
  const width =
    typeof elemRect.width !== 'undefined'
      ? elemRect.width
      : elemRect.right - elemRect.left;

  let rightAsBoundary = false;
  if (document.dir === 'rtl') {
    rightAsBoundary = leftAsBoundary;
    leftAsBoundary = false;
  }

  const hasSpaceAbove = referenceElemRect.top >= height;
  const hasSpaceBelow = viewPort.height - referenceElemRect.bottom >= height;

  const shouldAlignToRight =
    referenceElemRect.right >= width &&
    referenceElemRect.left + width >
      (rightAsBoundary ? referenceElemRect.right : viewPort.width);

  const shouldAlignToLeft =
    referenceElemRect.left + width <= viewPort.width &&
    referenceElemRect.right - width <
      (leftAsBoundary ? referenceElemRect.left : 0);

  const centerOverflow = {
    left: referenceElemRect.left - width * 0.5 < 0,
    right: referenceElemRect.right + width * 0.5 > viewPort.width,
    top: referenceElemRect.top - height * 0.5 < 0,
    bottom: referenceElemRect.bottom + height * 0.5 > viewPort.height
  };

  return {
    shouldAlignToLeft,
    shouldAlignToRight,
    hasSpaceAbove,
    hasSpaceBelow,
    centerOverflow
  };
}
