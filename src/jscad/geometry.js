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
  enableBackHole   = true,
  backHoleXOffset  = 30,
  backHoleWidth    = 55,
  backHoleHeight   = 10,

  // Front‐side hole options
  enableFrontHole  = true,
  frontHoleXOffset = 30,
  frontHoleWidth   = 55,
  frontHoleHeight  = 10,

  // Right‐side hole options (horizontal offset along local right)
  enableRightHole   = true,
  rightHoleXOffset  = 30,
  rightHoleWidth    = 55,
  rightHoleHeight   = 10,

  // Left‐side hole options (horizontal offset along local left)
  enableLeftHole  = true,
  leftHoleXOffset = 30,
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
    // positive backHoleXOffset moves hole to the right when facing the back (i.e. -X dir), so invert sign
    const backCutoutPos = translate(
      [
        backHoleXOffset,
        -effectiveDepth/2 - borderThickness/2,
        -bottomHeight + backHoleHeight/2
      ],
      backCutout
    );
    bottomBackBorderFinal = subtract(bottomBackBorder, backCutoutPos);
  }

  // --- Front‐side hole ---
  let bottomFrontBorderFinal = bottomFrontBorder;
  if (enableFrontHole) {
    const frontCutout = cuboid({
      size: [ frontHoleWidth, borderThickness + cornerOverlap, frontHoleHeight ]
    });
    // positive frontHoleXOffset moves hole to the right when facing the front (i.e. +X dir)
    const frontCutoutPos = translate(
      [
        -frontHoleXOffset,
        effectiveDepth/2 + borderThickness/2,
        -bottomHeight + frontHoleHeight/2
      ],
      frontCutout
    );
    bottomFrontBorderFinal = subtract(bottomFrontBorder, frontCutoutPos);
  }

  // --- Left‐side hole ---
  let bottomLeftBorderFinal = bottomLeftBorder;
  if (enableLeftHole) {
    const leftCutout = cuboid({
      size: [ borderThickness + cornerOverlap, leftHoleWidth, leftHoleHeight ]
    });
    // facing left side (−X dir), positive offset moves hole toward +Y (local right)
    const leftCutoutPos = translate(
      [
        -effectiveWidth/2 - borderThickness/2,
        -leftHoleXOffset,
        -bottomHeight + leftHoleHeight/2
      ],
      leftCutout
    );
    bottomLeftBorderFinal = subtract(bottomLeftBorder, leftCutoutPos);
  }

  // --- Right‐side hole ---
  let bottomRightBorderFinal = bottomRightBorder;
  if (enableRightHole) {
    const rightCutout = cuboid({
      size: [ borderThickness + cornerOverlap, rightHoleWidth, rightHoleHeight ]
    });
    // facing right side (+X dir), positive offset moves hole toward -Y (local right)
    const rightCutoutPos = translate(
      [
        effectiveWidth/2 + borderThickness/2,
        rightHoleXOffset,
        -bottomHeight + rightHoleHeight/2
      ],
      rightCutout
    );
    bottomRightBorderFinal = subtract(bottomRightBorder, rightCutoutPos);
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

