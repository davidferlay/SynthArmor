// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';

export function createGeometry({ width, depth, safety = 0, bottomHeight = 15, topHeight = 25, borderThickness = 2.5 }) {
  // cornerOverlap ensures a seamless overlap at the corners/edges.
  const cornerOverlap = borderThickness * 2;

  // Compute effective dimensions based on user input and safety offset.
  const effectiveWidth = width + safety;
  const effectiveDepth = depth + safety;

  // --- Bottom inner cuboid borders ---
  // The bottom cuboid is anchored at its top face (z = 0) and grows downward.
  // To fix its top face at z = 0, we translate it downward by bottomHeight/2.
  const bottomZ = -bottomHeight / 2;
  const bottomFrontBorder = translate(
    [0, effectiveDepth / 2 + borderThickness / 2, bottomZ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomBackBorder = translate(
    [0, -effectiveDepth / 2 - borderThickness / 2, bottomZ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomRightBorder = translate(
    [effectiveWidth / 2 + borderThickness / 2, 0, bottomZ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );
  const bottomLeftBorder = translate(
    [-effectiveWidth / 2 - borderThickness / 2, 0, bottomZ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );

  // --- Top inner cuboid borders ---
  // The top cuboid is anchored at its bottom face (z = 0) and grows upward.
  // To fix its bottom face at z = 0, we translate it upward by topHeight/2.
  const topZ = topHeight / 2;
  // The top inner cuboid dimensions are slightly reduced:
  const topInnerWidth = effectiveWidth - borderThickness / 2;
  const topInnerDepth = effectiveDepth - borderThickness / 2;
  const topInnerFrontBorder = translate(
    [0, topInnerDepth / 2 + borderThickness / 2, topZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerBackBorder = translate(
    [0, -topInnerDepth / 2 - borderThickness / 2, topZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerRightBorder = translate(
    [topInnerWidth / 2 + borderThickness / 2, 0, topZ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );
  const topInnerLeftBorder = translate(
    [-topInnerWidth / 2 - borderThickness / 2, 0, topZ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );

  // --- Above Face ---
  // This new element is placed exactly above the top inner cuboid.
  // Its bottom face touches the top face of the top inner cuboid borders (which is at z = topHeight).
  // Since the cuboid is centered by default, we translate it upward by (topHeight + borderThickness/2)
  // so that its bottom face is exactly at z = topHeight.
  const aboveFaceZ = topHeight + borderThickness / 2;
  const aboveFace = translate(
    [0, 0, aboveFaceZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, topInnerDepth + cornerOverlap, borderThickness] })
  );

  return [
    bottomFrontBorder,
    bottomBackBorder,
    bottomRightBorder,
    bottomLeftBorder,
    topInnerFrontBorder,
    topInnerBackBorder,
    topInnerRightBorder,
    topInnerLeftBorder,
    aboveFace
  ];
}

