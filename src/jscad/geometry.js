// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, length, safety = 0, topDepth = 25 }) {
  const mainHeight = 10;       // Height of the border pieces
  const borderThickness = 2.5; // Thickness of the borders
  const extra = 5;             // Extra added to the border's primary dimension

  // Apply the user-provided safety offset to the main dimensions
  const effectiveWidth = width + safety;
  const effectiveLength = length + safety;

  // Top border
  const top = translate(
    [0, effectiveLength / 2 + borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + extra, borderThickness, mainHeight] })
  );

  // Bottom border
  const bottom = translate(
    [0, -effectiveLength / 2 - borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + extra, borderThickness, mainHeight] })
  );

  // Right border
  const right = translate(
    [effectiveWidth / 2 + borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveLength + extra, mainHeight] })
  );

  // Left border
  const left = translate(
    [-effectiveWidth / 2 - borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveLength + extra, mainHeight] })
  );

  // Inner rectangle positioned topDepth above the top of the border pieces
  const innerHeight = 2; // Shallow height for the inner piece
  const inner = translate(
    [0, 0, mainHeight + topDepth],
    cuboid({ size: [effectiveWidth, effectiveLength, innerHeight] })
  );

  return [top, bottom, right, left, inner];
}

