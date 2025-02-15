// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, length }) {
  const mainHeight = 10;       // Height of the border pieces
  const borderThickness = 2.5; // Thickness of the borders
  const extra = 5;             // Extra added to the border's primary dimension

  // Define a safety constant of 0.5mm to add to the main dimensions
  const safety = 0.5;
  const effectiveWidth = width + safety;
  const effectiveLength = length + safety;

  // Top border: extend width by 'extra' and position so its bottom aligns with the top edge of the main area.
  const top = translate(
    [0, effectiveLength / 2 + borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + extra, borderThickness, mainHeight] })
  );

  // Bottom border: similar to the top, but at the bottom.
  const bottom = translate(
    [0, -effectiveLength / 2 - borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + extra, borderThickness, mainHeight] })
  );

  // Right border: extend the vertical dimension by 'extra' and position it so its left edge aligns with the right edge of the main area.
  const right = translate(
    [effectiveWidth / 2 + borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveLength + extra, mainHeight] })
  );

  // Left border: similar to the right border but positioned on the left.
  const left = translate(
    [-effectiveWidth / 2 - borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveLength + extra, mainHeight] })
  );

  // The main shallow cuboid (for reference only) is not rendered:
  // const main = cuboid({ size: [effectiveWidth, effectiveLength, mainHeight] });

  return [top, bottom, right, left];
}

