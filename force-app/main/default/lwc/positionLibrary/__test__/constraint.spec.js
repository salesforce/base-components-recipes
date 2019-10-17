import { Constraint } from '../constraint';
import { Direction } from '../direction';
import { mockWindow, getMockElement } from './mockUtil';

describe('c-position-library Constraint', () => {
  beforeEach(() => {
    mockWindow();
  });

  it('should define class Constraint', () => {
    expect(Constraint).not.toBeNull();
  });

  it('should create new Constraint', () => {
    const target = getMockElement({
      top: 0,
      left: 0,
      height: 200,
      with: 200
    });

    const element = getMockElement({
      top: 200,
      left: 0,
      height: 100,
      width: 100
    });

    const myConstraint = new Constraint('top', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      }
    });

    expect(myConstraint).not.toBeNull();
  });

  it('should have default for target top element Bottom', () => {
    const elementDimensions = {
        top: 200,
        left: 0,
        height: 100,
        width: 100
      },
      targetDimensions = { top: 500, left: 0, height: 200, width: 200 };
    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('bottom', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Center,
        vertical: Direction.Top
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    const expected = targetDimensions.top - elementDimensions.height;

    expect(element.top).toBe(expected);
  });

  it('should have default for target top element top', () => {
    const elementDimensions = {
        top: 200,
        left: 0,
        height: 100,
        width: 100
      },
      targetDimensions = { top: 500, left: 0, height: 200, with: 200 };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('top', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    const expected = targetDimensions.top;

    expect(element.top).toBe(expected);
  });

  it('should have default for target bottom element top', () => {
    const elementDimensions = {
        top: 234,
        left: 0,
        height: 100,
        width: 100
      },
      targetDimensions = { top: 500, left: 0, height: 200, with: 200 };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('top', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Center,
        vertical: Direction.Bottom
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    const expected = targetDimensions.top + targetDimensions.height;

    expect(element.top).toBe(expected);
  });

  it('should have default for target left element right', () => {
    const elementDimensions = {
        top: 200,
        left: 0,
        height: 100,
        width: 100
      },
      targetDimensions = { top: 500, left: 600, height: 200, width: 200 };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('right', {
      element,
      target,
      targetAlign: 'left top'
    });

    const expected = targetDimensions.left - elementDimensions.width;

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    expect(element.left).toBe(expected);
  });

  it('should have default for target left element left', () => {
    const targetDimensions = {
      top: 500,
      left: 600,
      height: 200,
      width: 200
    };

    const elementDimensions = {
      top: 200,
      left: 0,
      height: 100,
      width: 100
    };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('left', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    const expected = targetDimensions.left;

    expect(element.left).toBe(expected);
  });

  it('should have default for target right element right', () => {
    const targetDimensions = {
      top: 500,
      left: 600,
      height: 200,
      width: 200
    };

    const elementDimensions = {
      top: 200,
      left: 0,
      height: 100,
      width: 100
    };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('right', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Right,
        vertical: Direction.Top
      }
    });

    const expected =
      targetDimensions.left + targetDimensions.width - elementDimensions.width;

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    expect(element.left).toBe(expected);
  });

  it('should have default for target center element middle', () => {
    const targetDimensions = {
      top: 500,
      left: 600,
      height: 200,
      width: 200
    };

    const elementDimensions = {
      top: 200,
      left: 0,
      height: 100,
      width: 100
    };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('middle', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Right,
        vertical: Direction.Center
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    const expected =
      0.5 *
      (2 * targetDimensions.top +
        targetDimensions.height -
        elementDimensions.height);

    expect(element.top).toBe(expected);
  });

  it('should have default for target right element right with pad', () => {
    const targetDimensions = {
      top: 500,
      left: 600,
      height: 200,
      width: 200
    };

    const elementDimensions = {
      top: 200,
      left: 0,
      height: 100,
      width: 100
    };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('right', {
      element,
      target,
      pad: 10,
      targetAlign: {
        horizontal: Direction.Right,
        vertical: Direction.Top
      }
    });

    const expected =
      targetDimensions.left +
      targetDimensions.width -
      elementDimensions.width -
      10;
    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    expect(element.left).toBe(expected);
  });

  it('should have default for target top element top with pad', () => {
    const elementDimensions = {
        top: 200,
        left: 0,
        height: 100,
        width: 100
      },
      targetDimensions = { top: 500, left: 0, height: 200, with: 200 };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('top', {
      element,
      target,
      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      },

      pad: 10
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    const expected = targetDimensions.top + 10;

    expect(element.top).toBe(expected);
  });

  it('should handle below', () => {
    const elementDimensions = {
      top: 200,
      left: 0,
      height: 100,
      width: 100
    };

    const targetDimensions = { top: 500, left: 0, height: 200, with: 200 };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('below', {
      element,
      target,
      pad: 0,
      align: {
        horizontal: Direction.Left,
        vertical: Direction.Top
      },

      targetAlign: {
        horizontal: Direction.Left,
        vertical: Direction.Bottom
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    const expected = targetDimensions.top + targetDimensions.height;

    expect(element.top).toBe(expected);
  });

  it(`should shrink element size when target size didn't fit element size`, () => {
    const elementDimensions = {
      top: 100,
      left: 0,
      height: 300,
      width: 200,
      right: 200,
      bottom: 400
    };

    const targetDimensions = {
      top: 200,
      left: 10,
      height: 100,
      with: 100,
      right: 110,
      bottom: 300
    };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('shrinking box', {
      element,
      target,
      align: {},
      targetAlign: {},
      pad: 0,
      boxDirections: {
        top: true,
        bottom: true,
        left: true,
        right: true
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    expect(element.top).toBe(200);
    expect(element.left).toBe(10);
    expect(element.height).toBe(100);
    expect(element.width).toBe(190);
  });

  it('should only shrink top/bottom, when only top/bottom is specified', () => {
    const elementDimensions = {
        top: 100,
        left: 0,
        height: 300,
        width: 200,
        right: 200,
        bottom: 400
      },
      targetDimensions = {
        top: 200,
        left: 10,
        height: 100,
        with: 100,
        right: 110,
        bottom: 300
      };

    const target = getMockElement(targetDimensions);
    const element = getMockElement(elementDimensions);

    const myConstraint = new Constraint('shrinking box', {
      element,
      target,
      align: {},
      targetAlign: {},
      pad: 0,
      boxDirections: {
        top: true,
        bottom: true
      }
    });

    myConstraint.computeDisplacement();
    myConstraint.computePosition();

    expect(element.top).toBe(200);
    expect(element.left).toBe(0);
    expect(element.height).toBe(100);
    expect(element.width).toBe(200);
  });
});
