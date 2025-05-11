// src/jscad/geometry.js

import { cuboid } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';
import subtract from '@jscad/modeling/src/operations/booleans/subtract.js';

export function createGeometry({
  width,
  depth,
  safety = 0,
  bottomHeight = 15,
  topHeight = 25,
  borderThickness = 2.5
}) {
  // cornerOverlap ensures a seamless overlap at the corners/edges.
  const cornerOverlap = borderThickness * 2;

  // Horizontal offset for the back-hole:
  //  0 = centered, negative = move left, positive = move right
  const holeXOffset = 0;

  // Compute effective dimensions based on user input and safety offset.
  const effectiveWidth = width + safety;
  const effectiveDepth = depth + safety;

  // --- Bottom inner cuboid borders ---
  // The bottom cuboid is "anchored" at its top side at z = 0 and grows downward.
  // It spans z = -bottomHeight … 0.
  const bottomZ = -bottomHeight / 2;
  const bottomFrontBorder = translate(
    [0,  effectiveDepth / 2 + borderThickness / 2, bottomZ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomBackBorder = translate(
    [0, -effectiveDepth / 2 - borderThickness / 2, bottomZ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomRightBorder = translate(
    [ effectiveWidth / 2 + borderThickness / 2, 0, bottomZ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );
  const bottomLeftBorder = translate(
    [-effectiveWidth / 2 - borderThickness / 2, 0, bottomZ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );

  // --- Carve a hollow cuboid (55 mm × 10 mm) from the back border ---
  // The hole's bottom face sits at the wall's bottom edge (z = -bottomHeight),
  // and its top face rises to z = -bottomHeight + holeHeight.
  const holeWidth  = 95;
  const holeHeight = 20;
  // Make the cut‐out slightly thicker in Y so it fully passes through the wall
  const cutout = cuboid({ size: [holeWidth, borderThickness + cornerOverlap, holeHeight] });
  // Position it flush to the back face (Y), shifted in X by holeXOffset,
  // with its bottom at z = -bottomHeight
  const cutoutPos = translate(
    [
      holeXOffset,
      -effectiveDepth / 2 - borderThickness / 2,
      /* bottom edge */ -bottomHeight + holeHeight / 2
    ],
    cutout
  );
  // Subtract that little box from the back border
  const bottomBackBorderCut = subtract(bottomBackBorder, cutoutPos);

  // --- Top inner cuboid borders ---
  const topZ = topHeight / 2;
  const topInnerWidth  = effectiveWidth  - borderThickness / 2;
  const topInnerDepth  = effectiveDepth  - borderThickness / 2;
  const topInnerFrontBorder = translate(
    [0,  topInnerDepth / 2 + borderThickness / 2, topZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerBackBorder = translate(
    [0, -topInnerDepth / 2 - borderThickness / 2, topZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerRightBorder = translate(
    [ topInnerWidth / 2 + borderThickness / 2, 0, topZ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );
  const topInnerLeftBorder = translate(
    [-topInnerWidth / 2 - borderThickness / 2, 0, topZ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );

  // --- Top cover above the inner borders ---
  const topCoverZ = topHeight + borderThickness / 2;
  const topCover = translate(
    [0, 0, topCoverZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, topInnerDepth + cornerOverlap, borderThickness] })
  );

  return [
    bottomFrontBorder,
    bottomBackBorderCut,
    bottomRightBorder,
    bottomLeftBorder,
    topInnerFrontBorder,
    topInnerBackBorder,
    topInnerRightBorder,
    topInnerLeftBorder,
    topCover
  ];
}
