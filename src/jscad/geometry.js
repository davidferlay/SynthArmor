// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, depth, safety = 0 }) {
  // Define different heights for bottom and top inner cuboids
  const bottomHeight = 15;     // Height for the bottom inner cuboid's borders (mm)
  const topHeight = 25;        // Height for the top inner cuboid's borders (mm)
  const borderThickness = 2.5; // Thickness of the borders (mm)
  // cornerOverlap is computed as twice the borderThickness.
  // Its purpose is to ensure a seamless overlap at the corners/edges of the borders.
  const cornerOverlap = borderThickness * 2;

  // Compute effective dimensions based on user input and safety offset.
  const effectiveWidth = width + safety;
  const effectiveDepth = depth + safety;

  // --- Borders for the bottom inner cuboid (implicit inner cuboid) ---
  const bottomFrontBorder = translate(
    [0, effectiveDepth / 2 + borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomBackBorder = translate(
    [0, -effectiveDepth / 2 - borderThickness / 2, 0],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomRightBorder = translate(
    [effectiveWidth / 2 + borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );
  const bottomLeftBorder = translate(
    [-effectiveWidth / 2 - borderThickness / 2, 0, 0],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );

  // --- Borders for the top inner cuboid (implicit inner cuboid) ---
  // The top inner cuboid is reduced by half of borderThickness in width and depth.
  const topInnerWidth = effectiveWidth - borderThickness / 2;
  const topInnerDepth = effectiveDepth - borderThickness / 2;
  // Top borders are translated upward by bottomHeight so they sit directly on top of the bottom cuboid.
  const topInnerFrontBorder = translate(
    [0, topInnerDepth / 2 + borderThickness / 2, bottomHeight],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerBackBorder = translate(
    [0, -topInnerDepth / 2 - borderThickness / 2, bottomHeight],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerRightBorder = translate(
    [topInnerWidth / 2 + borderThickness / 2, 0, bottomHeight],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );
  const topInnerLeftBorder = translate(
    [-topInnerWidth / 2 - borderThickness / 2, 0, bottomHeight],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );

  // Return only the border geometries.
  // The inner cuboids themselves remain implicit and are not rendered.
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
