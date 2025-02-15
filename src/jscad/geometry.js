// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, length }) {
  const mainHeight = 10;         // Height of the main shape (shallow cuboid)
  const borderThickness = 2.5;   // Thickness of the borders

  // Main shallow cuboid (centered at the origin)
  const main = cuboid({ size: [width, length, mainHeight] });

  // Top border (runs along the top edge)
  // Its center is translated upward so its bottom face touches the main cuboid.
  const top = translate(
    [0, length / 2 + borderThickness / 2, 0],
    cuboid({ size: [width, borderThickness, mainHeight] })
  );

  // Bottom border (runs along the bottom edge)
  const bottom = translate(
    [0, - (length / 2 + borderThickness / 2), 0],
    cuboid({ size: [width, borderThickness, mainHeight] })
  );

  // Right border (runs along the right edge)
  const right = translate(
    [width / 2 + borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, length, mainHeight] })
  );

  // Left border (runs along the left edge)
  const left = translate(
    [- (width / 2 + borderThickness / 2), 0, 0],
    cuboid({ size: [borderThickness, length, mainHeight] })
  );

  // Return all parts as an array (the STL serializer will combine them)
  return [main, top, bottom, right, left];
}
