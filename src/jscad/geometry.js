// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, depth, safety = 0 }) {
  const mainHeight = 10;       // Height of the border pieces
  const borderThickness = 2.5; // Thickness of the borders
  // cornerOverlap is computed as twice the borderThickness.
  // Its purpose is to ensure a seamless overlap at the corners/edges of the borders.
  const cornerOverlap = borderThickness * 2;

  // Compute effective dimensions based on user input and safety offset.
  const effectiveWidth = width + safety;
  const effectiveDepth = depth + safety;

  // --- Borders for the bottom inner cuboid (implicit inner cuboid) ---
  const bottomFrontBorder = translate(
    [0, effectiveDepth / 2 + borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, mainHeight] })
  );
  const bottomBackBorder = translate(
    [0, -effectiveDepth / 2 - borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, mainHeight] })
  );
  const bottomRightBorder = translate(
    [effectiveWidth / 2 + borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, mainHeight] })
  );
  const bottomLeftBorder = translate(
    [-effectiveWidth / 2 - borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, mainHeight] })
  );

  // --- Borders for the top inner cuboid (implicit inner cuboid) ---
  // The top inner cuboid is reduced by half of borderThickness in width and depth.
  const topInnerWidth = effectiveWidth - borderThickness / 2;
  const topInnerDepth = effectiveDepth - borderThickness / 2;
  // These border pieces are stacked on top of the bottom borders (translated in Z by mainHeight)
  const topInnerFrontBorder = translate(
    [0, topInnerDepth / 2 + borderThickness / 2, mainHeight],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, mainHeight] })
  );
  const topInnerBackBorder = translate(
    [0, -topInnerDepth / 2 - borderThickness / 2, mainHeight],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, mainHeight] })
  );
  const topInnerRightBorder = translate(
    [topInnerWidth / 2 + borderThickness / 2, 0, mainHeight],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, mainHeight] })
  );
  const topInnerLeftBorder = translate(
    [-topInnerWidth / 2 - borderThickness / 2, 0, mainHeight],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, mainHeight] })
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

