// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, length }) {
  const mainHeight = 10;       // Height of the border pieces
  const borderThickness = 2.5; // Thickness of the borders
  const extra = 5;           // Extra added to the border's primary dimension

  // Top border: extend width by 'extra' so it overhangs on both sides.
  // Position it so its bottom edge aligns with the original top edge.
  const top = translate(
    [0, length / 2 + borderThickness / 2, 0],
    cuboid({ size: [width + extra, borderThickness, mainHeight] })
  );

  // Bottom border: similar to the top border but at the bottom.
  const bottom = translate(
    [0, - (length / 2 + borderThickness / 2), 0],
    cuboid({ size: [width + extra, borderThickness, mainHeight] })
  );

  // Right border: extend the vertical dimension by 'extra'.
  // Position it so its left edge aligns with the original right edge.
  const right = translate(
    [width / 2 + borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, length + extra, mainHeight] })
  );

  // Left border: similar to the right border but at the left.
  const left = translate(
    [- (width / 2 + borderThickness / 2), 0, 0],
    cuboid({ size: [borderThickness, length + extra, mainHeight] })
  );

  // Only the border pieces are returned (no internal cuboid)
  return [top, bottom, right, left];
}

