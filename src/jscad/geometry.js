// src/jscad/geometry.js

import { cuboid, polyhedron } from '@jscad/modeling/src/primitives/index.js';
import { translate } from '@jscad/modeling/src/operations/transforms/translate.js';
import { rotateX, rotateY, rotateZ } from '@jscad/modeling/src/operations/transforms/index.js';
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
  // Make the inside edge thicker by increasing the inset
  const topInsetAmount = borderThickness * 2; // This creates a thicker inside edge
  const topInnerWidth = effectiveWidth  - topInsetAmount;
  const topInnerDepth = effectiveDepth  - topInsetAmount;

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

  // --- Triangular supports connecting bottom and top borders ---
  // Helper function to create a solid wedge shape with angled ends
  const createWedge = (length) => {
    // Create a triangular wedge using polyhedron with 45-degree angled ends
    const halfLength = length / 2;
    const cut = borderThickness; // 45-degree angle cut depth
    
    const points = [
      // Bottom face (at z=0)
      [-halfLength + cut, 0, 0],              // 0: back-left corner (angled)
      [halfLength - cut, 0, 0],               // 1: front-left corner (angled)
      [halfLength, cut, 0],                   // 2: front-right inner
      [-halfLength, cut, 0],                  // 3: back-right inner
      [-halfLength, borderThickness, 0],      // 4: back-right outer
      [halfLength, borderThickness, 0],       // 5: front-right outer
      // Top edge points (triangular top at z=borderThickness)
      [-halfLength + cut, 0, borderThickness], // 6: back top (angled)
      [halfLength - cut, 0, borderThickness],  // 7: front top (angled)
    ];
    
    const faces = [
      // Bottom face
      [0, 3, 4, 5, 2, 1],
      // Slanted face (the hypotenuse of the triangle)
      [0, 1, 7, 6],
      // Front angled end faces
      [1, 2, 7],
      [2, 5, 7],
      // Back angled end faces  
      [0, 6, 3],
      [3, 6, 4],
      // Right vertical face
      [5, 4, 6, 7],
      // End triangles
      [2, 3, 0, 1],  // Inner vertical face where cut meets
      [4, 3, 2, 5]   // Outer vertical face
    ];
    
    return polyhedron({ points, faces });
  };

  // Front support - runs along the front edge
  // Add borderThickness*2 to compensate for angled cuts on both ends
  const frontWedge = createWedge(effectiveWidth + borderThickness * 2);
  const frontSupport = translate(
    [0, effectiveDepth/2, 0],
    frontWedge
  );

  // Back support - runs along the back edge
  const backWedge = createWedge(effectiveWidth + borderThickness * 2);
  const backSupport = translate(
    [0, -effectiveDepth/2, 0],
    rotateZ(Math.PI, backWedge)
  );

  // Right support - runs along the right edge
  const rightWedge = createWedge(effectiveDepth + borderThickness * 2);
  const rightSupport = translate(
    [effectiveWidth/2, 0, 0],
    rotateZ(-Math.PI/2, rightWedge)
  );

  // Left support - runs along the left edge
  const leftWedge = createWedge(effectiveDepth + borderThickness * 2);
  const leftSupport = translate(
    [-effectiveWidth/2, 0, 0],
    rotateZ(Math.PI/2, leftWedge)
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
    topCover,
    frontSupport,
    backSupport,
    rightSupport,
    leftSupport
  ];
}

