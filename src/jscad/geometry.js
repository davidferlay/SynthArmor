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
  enableBackHole   = false,
  backHoleXOffset  = 0,
  backHoleWidth    = 55,
  backHoleHeight   = 10,

  // Front‐side hole options
  enableFrontHole  = false,
  frontHoleXOffset = 0,
  frontHoleWidth   = 55,
  frontHoleHeight  = 10,

  // Right‐side hole options (horizontal offset along local right)
  enableRightHole   = false,
  rightHoleXOffset  = 0,
  rightHoleWidth    = 55,
  rightHoleHeight   = 10,

  // Left‐side hole options (horizontal offset along local left)
  enableLeftHole  = false,
  leftHoleXOffset = 0,
  leftHoleWidth   = 55,
  leftHoleHeight  = 10
}) {
  const cornerOverlap   = borderThickness * 2;
  const effectiveWidth  = width  + safety;
  const effectiveDepth  = depth  + safety;

  // --- Bottom borders (anchored at z=0, grow downward) ---
  const bottomZ = -bottomHeight / 2;
  const bottomFrontBorder = translate(
    [ 0,  effectiveDepth/2 + borderThickness/2, bottomZ ],
    cuboid({ size: [ effectiveWidth + cornerOverlap, borderThickness, bottomHeight ] })
  );
  const bottomBackBorder = translate(
    [ 0, -effectiveDepth/2 - borderThickness/2, bottomZ ],
    cuboid({ size: [ effectiveWidth + cornerOverlap, borderThickness, bottomHeight ] })
  );
  const bottomRightBorder = translate(
    [ effectiveWidth/2 + borderThickness/2, 0, bottomZ ],
    cuboid({ size: [ borderThickness, effectiveDepth + cornerOverlap, bottomHeight ] })
  );
  const bottomLeftBorder = translate(
    [ -effectiveWidth/2 - borderThickness/2, 0, bottomZ ],
    cuboid({ size: [ borderThickness, effectiveDepth + cornerOverlap, bottomHeight ] })
  );

  // --- Back‐side hole ---
  let bottomBackBorderFinal = bottomBackBorder;
  if (enableBackHole) {
    const backCutout = cuboid({
      size: [ backHoleWidth, borderThickness + cornerOverlap, backHoleHeight ]
    });
    const backCutoutPos = translate(
      [
        backHoleXOffset,
        -effectiveDepth/2 - borderThickness/2,
        -bottomHeight + backHoleHeight/2
      ],
      backCutout
    );
    bottomBackBorderFinal = subtract(bottomBackBorderFinal, backCutoutPos);
  }

  // --- Front‐side hole ---
  let bottomFrontBorderFinal = bottomFrontBorder;
  if (enableFrontHole) {
    const frontCutout = cuboid({
      size: [ frontHoleWidth, borderThickness + cornerOverlap, frontHoleHeight ]
    });
    const frontCutoutPos = translate(
      [
        -frontHoleXOffset,
        effectiveDepth/2 + borderThickness/2,
        -bottomHeight + frontHoleHeight/2
      ],
      frontCutout
    );
    bottomFrontBorderFinal = subtract(bottomFrontBorderFinal, frontCutoutPos);
  }

  // --- Prepare left/right finals ---
  let bottomLeftBorderFinal  = bottomLeftBorder;
  let bottomRightBorderFinal = bottomRightBorder;

  // --- Enabled RIGHT hole draws on the LEFT border ---
  if (enableRightHole) {
    const rightCutout = cuboid({
      size: [ borderThickness + cornerOverlap, rightHoleWidth, rightHoleHeight ]
    });
    // positive offset moves hole toward -Y (local left)
    const rightCutoutPos = translate(
      [
        -effectiveWidth/2 - borderThickness/2,  // left border X
        -rightHoleXOffset,
        -bottomHeight + rightHoleHeight/2
      ],
      rightCutout
    );
    bottomLeftBorderFinal = subtract(bottomLeftBorderFinal, rightCutoutPos);
  }

  // --- Enabled LEFT hole draws on the RIGHT border ---
  if (enableLeftHole) {
    const leftCutout = cuboid({
      size: [ borderThickness + cornerOverlap, leftHoleWidth, leftHoleHeight ]
    });
    // positive offset moves hole toward +Y (local right)
    const leftCutoutPos = translate(
      [
        effectiveWidth/2 + borderThickness/2,  // right border X
        leftHoleXOffset,
        -bottomHeight + leftHoleHeight/2
      ],
      leftCutout
    );
    bottomRightBorderFinal = subtract(bottomRightBorderFinal, leftCutoutPos);
  }

  // --- Top borders (anchored at z=0, grow upward) ---
  const topZ = topHeight / 2;
  const topInnerWidth = effectiveWidth  - borderThickness/2;
  const topInnerDepth = effectiveDepth  - borderThickness/2;

  const topInnerFrontBorder = translate(
    [ 0,  topInnerDepth/2 + borderThickness/2, topZ ],
    cuboid({ size: [ topInnerWidth + cornerOverlap, borderThickness, topHeight ] })
  );
  const topInnerBackBorder = translate(
    [ 0, -topInnerDepth/2 - borderThickness/2, topZ ],
    cuboid({ size: [ topInnerWidth + cornerOverlap, borderThickness, topHeight ] })
  );
  const topInnerRightBorder = translate(
    [ topInnerWidth/2 + borderThickness/2, 0, topZ ],
    cuboid({ size: [ borderThickness, topInnerDepth + cornerOverlap, topHeight ] })
  );
  const topInnerLeftBorder = translate(
    [ -topInnerWidth/2 - borderThickness/2, 0, topZ ],
    cuboid({ size: [ borderThickness, topInnerDepth + cornerOverlap, topHeight ] })
  );

  // --- Top cover above the inner borders ---
  const topCoverZ = topHeight + borderThickness/2;
  const topCover = translate(
    [ 0, 0, topCoverZ ],
    cuboid({ size: [ topInnerWidth + cornerOverlap, topInnerDepth + cornerOverlap, borderThickness ] })
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

