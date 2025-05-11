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

  // Back‐side hole options
  enableBackHole = true,
  backHoleXOffset = 0,

  // Front‐side hole options
  enableFrontHole = false,
  frontHoleXOffset = 0,

  // Left‐side hole options (now truly on the left when viewed)
  enableLeftHole = true,
  leftHoleYOffset = 0,

  // Right‐side hole options (now truly on the right when viewed)
  enableRightHole = true,
  rightHoleYOffset = 0,

  // Shared hole dimensions
  holeWidth = 55,
  holeHeight = 10
}) {
  const cornerOverlap = borderThickness * 2;
  const effectiveWidth = width + safety;
  const effectiveDepth = depth + safety;

  // --- Bottom borders (anchored at z=0, grow downward) ---
  const bottomZ = -bottomHeight / 2;
  const bottomFrontBorder = translate(
    [0,  effectiveDepth/2 + borderThickness/2, bottomZ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomBackBorder = translate(
    [0, -effectiveDepth/2 - borderThickness/2, bottomZ],
    cuboid({ size: [effectiveWidth + cornerOverlap, borderThickness, bottomHeight] })
  );
  const bottomRightBorder = translate(
    [ effectiveWidth/2 + borderThickness/2, 0, bottomZ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );
  const bottomLeftBorder = translate(
    [-effectiveWidth/2 - borderThickness/2, 0, bottomZ],
    cuboid({ size: [borderThickness, effectiveDepth + cornerOverlap, bottomHeight] })
  );

  // --- Carve back‐hole if enabled ---
  let bottomBackBorderFinal = bottomBackBorder;
  if (enableBackHole) {
    const cutout = cuboid({ size: [holeWidth, borderThickness + cornerOverlap, holeHeight] });
    const cutoutPos = translate(
      [ backHoleXOffset, -effectiveDepth/2 - borderThickness/2, -bottomHeight + holeHeight/2 ],
      cutout
    );
    bottomBackBorderFinal = subtract(bottomBackBorder, cutoutPos);
  }

  // --- Carve front‐hole if enabled ---
  let bottomFrontBorderFinal = bottomFrontBorder;
  if (enableFrontHole) {
    const cutout = cuboid({ size: [holeWidth, borderThickness + cornerOverlap, holeHeight] });
    const cutoutPos = translate(
      [ frontHoleXOffset, effectiveDepth/2 + borderThickness/2, -bottomHeight + holeHeight/2 ],
      cutout
    );
    bottomFrontBorderFinal = subtract(bottomFrontBorder, cutoutPos);
  }

  // --- Carve left‐side hole if enabled (positive X border) ---
  let bottomRightBorderFinal = bottomRightBorder;
  if (enableLeftHole) {
    const cutout = cuboid({ size: [borderThickness + cornerOverlap, holeWidth, holeHeight] });
    const cutoutPos = translate(
      [ effectiveWidth/2 + borderThickness/2, leftHoleYOffset, -bottomHeight + holeHeight/2 ],
      cutout
    );
    bottomRightBorderFinal = subtract(bottomRightBorder, cutoutPos);
  }

  // --- Carve right‐side hole if enabled (negative X border) ---
  let bottomLeftBorderFinal = bottomLeftBorder;
  if (enableRightHole) {
    const cutout = cuboid({ size: [borderThickness + cornerOverlap, holeWidth, holeHeight] });
    const cutoutPos = translate(
      [ -effectiveWidth/2 - borderThickness/2, rightHoleYOffset, -bottomHeight + holeHeight/2 ],
      cutout
    );
    bottomLeftBorderFinal = subtract(bottomLeftBorder, cutoutPos);
  }

  // --- Top borders (anchored at z=0, grow upward) ---
  const topZ = topHeight / 2;
  const topInnerWidth  = effectiveWidth  - borderThickness/2;
  const topInnerDepth  = effectiveDepth  - borderThickness/2;
  const topInnerFrontBorder = translate(
    [0,  topInnerDepth/2 + borderThickness/2, topZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerBackBorder = translate(
    [0, -topInnerDepth/2 - borderThickness/2, topZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, borderThickness, topHeight] })
  );
  const topInnerRightBorder = translate(
    [ topInnerWidth/2 + borderThickness/2, 0, topZ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );
  const topInnerLeftBorder = translate(
    [-topInnerWidth/2 - borderThickness/2, 0, topZ],
    cuboid({ size: [borderThickness, topInnerDepth + cornerOverlap, topHeight] })
  );

  // --- Top cover above the inner borders ---
  const topCoverZ = topHeight + borderThickness/2;
  const topCover = translate(
    [0, 0, topCoverZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, topInnerDepth + cornerOverlap, borderThickness] })
  );

  return [
    bottomFrontBorderFinal,
    bottomBackBorderFinal,
    bottomRightBorderFinal,
    bottomLeftBorderFinal,
    topInnerFrontBorder,
    topInnerBackBorder,
    topInnerRightBorder,
    topInnerLeftBorder,
    topCover
  ];
}

