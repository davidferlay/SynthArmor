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
  borderThickness = 2.5,
  // When true, carve the hollow cuboid from the back border
  enableBackHole = true
}) {
  // cornerOverlap ensures a seamless overlap at the corners/edges.
  const cornerOverlap = borderThickness * 2;

  // Horizontal offset for the back-hole: 0 = center, negative = left, positive = right
  const holeXOffset = 0;  // tweak as needed

  // Dimensions including safety offset
  const effectiveWidth = width + safety;
  const effectiveDepth = depth + safety;

  // --- Bottom inner cuboid borders ---
  // Anchored at z = 0 (top), growing downward to z = -bottomHeight
  const bottomZ = -bottomHeight / 2;
  const bottomFrontBorder = translate(
    [ 0,  effectiveDepth / 2 + borderThickness / 2, bottomZ ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomBackBorder = translate(
    [ 0, -effectiveDepth / 2 - borderThickness / 2, bottomZ ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomRightBorder = translate(
    [ effectiveWidth / 2 + borderThickness / 2, 0, bottomZ ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );
  const bottomLeftBorder = translate(
    [ -effectiveWidth / 2 - borderThickness / 2, 0, bottomZ ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );

  // Decide whether to subtract the back-hole or leave the original border
  let bottomBackBorderFinal = bottomBackBorder;
  if (enableBackHole) {
    const holeWidth  = 55;
    const holeHeight = 10;
    const cutout = cuboid({ size: [holeWidth, borderThickness + cornerOverlap, holeHeight] });
    // place bottom face at z = -bottomHeight, top at -bottomHeight + holeHeight
    const cutoutPos = translate(
      [
        holeXOffset,
        -effectiveDepth / 2 - borderThickness / 2,
        -bottomHeight + holeHeight / 2
      ],
      cutout
    );
    bottomBackBorderFinal = subtract(bottomBackBorder, cutoutPos);
  }

  // --- Top inner cuboid borders ---
  const topZ = topHeight / 2;
  const topInnerWidth = effectiveWidth - borderThickness / 2;
  const topInnerDepth = effectiveDepth - borderThickness / 2;
  const topInnerFrontBorder = translate(
    [ 0,  topInnerDepth / 2 + borderThickness / 2, topZ ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerBackBorder = translate(
    [ 0, -topInnerDepth / 2 - borderThickness / 2, topZ ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerRightBorder = translate(
    [ topInnerWidth / 2 + borderThickness / 2, 0, topZ ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );
  const topInnerLeftBorder = translate(
    [ -topInnerWidth / 2 - borderThickness / 2, 0, topZ ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );

  // --- Top cover above the inner borders ---
  const topCoverZ = topHeight + borderThickness / 2;
  const topCover = translate(
    [ 0, 0, topCoverZ ],
    cuboid({ size: [topInnerWidth + cornerOverlap, topInnerDepth + cornerOverlap, borderThickness] })
  );

  return [
    bottomFrontBorder,
    bottomBackBorderFinal,
    bottomRightBorder,
    bottomLeftBorder,
    topInnerFrontBorder,
    topInnerBackBorder,
    topInnerRightBorder,
    topInnerLeftBorder,
    topCover
  ];
}
