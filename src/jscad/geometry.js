// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, length, safety = 0 }) {
  const mainHeight = 10;       // Height of the border pieces
  const borderThickness = 2.5; // Thickness of the borders
  const extra = 5;             // Extra added to the border's primary dimension

  // Compute effective dimensions based on user input and safety offset.
  const effectiveWidth = width + safety;
  const effectiveLength = length + safety;

  // --- Borders for the bottom inner cuboid (implicit inner cuboid) ---
  const bottomFrontBorder = translate(
    [0, effectiveLength / 2 + borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + extra, borderThickness, mainHeight] })
  );
  const bottomBackBorder = translate(
    [0, -effectiveLength / 2 - borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + extra, borderThickness, mainHeight] })
  );
  const bottomRightBorder = translate(
    [effectiveWidth / 2 + borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveLength + extra, mainHeight] })
  );
  const bottomLeftBorder = translate(
    [-effectiveWidth / 2 - borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveLength + extra, mainHeight] })
  );

  // --- Borders for the top inner cuboid (implicit inner cuboid) ---
  // The top inner cuboid is reduced by half of borderThickness in width and length.
  const topInnerWidth = effectiveWidth - borderThickness / 2;
  const topInnerLength = effectiveLength - borderThickness / 2;
  // These border pieces are stacked on top of the bottom borders (translated in Z by mainHeight)
  const topInnerFrontBorder = translate(
    [0, topInnerLength / 2 + borderThickness / 2, mainHeight],
    cuboid({ size: [topInnerWidth + extra, borderThickness, mainHeight] })
  );
  const topInnerBackBorder = translate(
    [0, -topInnerLength / 2 - borderThickness / 2, mainHeight],
    cuboid({ size: [topInnerWidth + extra, borderThickness, mainHeight] })
  );
  const topInnerRightBorder = translate(
    [topInnerWidth / 2 + borderThickness / 2, 0, mainHeight],
    cuboid({ size: [borderThickness, topInnerLength + extra, mainHeight] })
  );
  const topInnerLeftBorder = translate(
    [-topInnerWidth / 2 - borderThickness / 2, 0, mainHeight],
    cuboid({ size: [borderThickness, topInnerLength + extra, mainHeight] })
  );

  // Return only the border geometries.
  // The inner cuboids themselves are implicit and are not rendered.
  return [
    bottomFrontBorder,
    bottomBackBorder,
    bottomRightBorder,
    bottomLeftBorder,
    topInnerFrontBorder,
    topInnerBackBorder,
    topInnerRightBorder,
    topInnerLeftBorder
  ];
}
