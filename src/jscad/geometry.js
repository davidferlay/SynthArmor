import { primitives, transforms, extrusions, booleans, geometries } from "@jscad/modeling";

const { cuboid, polygon } = primitives;
const { translate, scale } = transforms;
const { extrudeLinear } = extrusions;
const { subtract } = booleans;
const { geom2 } = geometries;

// Simple SVG path parser for basic shapes (fallback implementation)
function parseSimpleSvgPath(pathData) {
  // This is a very basic SVG path parser for demonstration
  // In a production environment, you'd want a more robust parser
  const commands = pathData.match(/[MmLlHhVvCcSsQqTtAaZz][^MmLlHhVvCcSsQqTtAaZz]*/g);
  const points = [];
  let currentX = 0, currentY = 0;

  if (!commands) return points;

  commands.forEach(command => {
    const type = command[0];
    const args = command.slice(1).trim().split(/[\s,]+/).map(parseFloat).filter(n => !isNaN(n));

    switch (type.toLowerCase()) {
      case 'm': // moveto
        if (args.length >= 2) {
          currentX = type === 'M' ? args[0] : currentX + args[0];
          currentY = type === 'M' ? args[1] : currentY + args[1];
          points.push([currentX, currentY]);
        }
        break;
      case 'l': // lineto
        if (args.length >= 2) {
          currentX = type === 'L' ? args[0] : currentX + args[0];
          currentY = type === 'L' ? args[1] : currentY + args[1];
          points.push([currentX, currentY]);
        }
        break;
      case 'h': // horizontal lineto
        if (args.length >= 1) {
          currentX = type === 'H' ? args[0] : currentX + args[0];
          points.push([currentX, currentY]);
        }
        break;
      case 'v': // vertical lineto
        if (args.length >= 1) {
          currentY = type === 'V' ? args[0] : currentY + args[0];
          points.push([currentX, currentY]);
        }
        break;
    }
  });

  return points;
}

// Simple SVG parser for basic rect and path elements
function parseSimpleSvg(svgContent) {
  if (!svgContent || typeof svgContent !== 'string') return [];

  const shapes = [];

  // Parse rect elements
  const rectMatches = svgContent.match(/<rect[^>]*>/g);
  if (rectMatches) {
    rectMatches.forEach(rectMatch => {
      const x = parseFloat(rectMatch.match(/x=['"]([^'"]*)['"]/)?.[1] || 0);
      const y = parseFloat(rectMatch.match(/y=['"]([^'"]*)['"]/)?.[1] || 0);
      const width = parseFloat(rectMatch.match(/width=['"]([^'"]*)['"]/)?.[1] || 0);
      const height = parseFloat(rectMatch.match(/height=['"]([^'"]*)['"]/)?.[1] || 0);

      if (width > 0 && height > 0) {
        shapes.push({
          type: 'rect',
          points: [
            [x, y],
            [x + width, y],
            [x + width, y + height],
            [x, y + height]
          ]
        });
      }
    });
  }

  // Parse path elements
  const pathMatches = svgContent.match(/<path[^>]*d=['"]([^'"]*)['"]/g);
  if (pathMatches) {
    pathMatches.forEach(pathMatch => {
      const dAttr = pathMatch.match(/d=['"]([^'"]*)['"]/)?.[1];
      if (dAttr) {
        const points = parseSimpleSvgPath(dAttr);
        if (points.length > 2) {
          shapes.push({
            type: 'path',
            points: points
          });
        }
      }
    });
  }

  // Parse circle elements
  const circleMatches = svgContent.match(/<circle[^>]*>/g);
  if (circleMatches) {
    circleMatches.forEach(circleMatch => {
      const cx = parseFloat(circleMatch.match(/cx=['"]([^'"]*)['"]/)?.[1] || 0);
      const cy = parseFloat(circleMatch.match(/cy=['"]([^'"]*)['"]/)?.[1] || 0);
      const r = parseFloat(circleMatch.match(/r=['"]([^'"]*)['"]/)?.[1] || 0);

      if (r > 0) {
        // Approximate circle with polygon
        const segments = 16;
        const points = [];
        for (let i = 0; i < segments; i++) {
          const angle = (i / segments) * 2 * Math.PI;
          points.push([
            cx + r * Math.cos(angle),
            cy + r * Math.sin(angle)
          ]);
        }
        shapes.push({
          type: 'circle',
          points: points
        });
      }
    });
  }

  return shapes;
}

export function createGeometry({
  width,
  depth,
  safety = 0,
  bottomHeight = 15,
  topHeight = 25,
  borderThickness = 2.5,

  // Back-side hole options
  enableBackHole = false,
  backHoleXOffset = 0,
  backHoleWidth = 55,
  backHoleHeight = 10,

  // Front-side hole options
  enableFrontHole = false,
  frontHoleXOffset = 0,
  frontHoleWidth = 55,
  frontHoleHeight = 10,

  // Right-side hole options
  enableRightHole = false,
  rightHoleXOffset = 0,
  rightHoleWidth = 55,
  rightHoleHeight = 10,

  // Left-side hole options
  enableLeftHole = false,
  leftHoleXOffset = 0,
  leftHoleWidth = 55,
  leftHoleHeight = 10,

  // SVG carving
  svgContent = null
}) {
  const cornerOverlap = borderThickness * 2;
  const effectiveWidth = width + safety;
  const effectiveDepth = depth + safety;

  // Bottom borders (anchored at z=0, grow downward)
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

  // Apply holes on bottom borders
  // Back hole (on back border)
  let bottomBackBorderFinal = bottomBackBorder;
  if (enableBackHole) {
    const cut = cuboid({ size: [backHoleWidth, borderThickness + cornerOverlap, backHoleHeight] });
    const pos = translate(
      [backHoleXOffset, -effectiveDepth / 2 - borderThickness / 2, -bottomHeight + backHoleHeight / 2],
      cut
    );
    bottomBackBorderFinal = subtract(bottomBackBorderFinal, pos);
  }

  // Front hole (on front border)
  let bottomFrontBorderFinal = bottomFrontBorder;
  if (enableFrontHole) {
    const cut = cuboid({ size: [frontHoleWidth, borderThickness + cornerOverlap, frontHoleHeight] });
    const pos = translate(
      [frontHoleXOffset, effectiveDepth / 2 + borderThickness / 2, -bottomHeight + frontHoleHeight / 2],
      cut
    );
    bottomFrontBorderFinal = subtract(bottomFrontBorderFinal, pos);
  }

  // Right hole (on right border)
  let bottomRightBorderFinal = bottomRightBorder;
  if (enableRightHole) {
    const cut = cuboid({ size: [borderThickness + cornerOverlap, rightHoleWidth, rightHoleHeight] });
    const pos = translate(
      [effectiveWidth / 2 + borderThickness / 2, rightHoleXOffset, -bottomHeight + rightHoleHeight / 2],
      cut
    );
    bottomRightBorderFinal = subtract(bottomRightBorderFinal, pos);
  }

  // Left hole (on left border)
  let bottomLeftBorderFinal = bottomLeftBorder;
  if (enableLeftHole) {
    const cut = cuboid({ size: [borderThickness + cornerOverlap, leftHoleWidth, leftHoleHeight] });
    const pos = translate(
      [-effectiveWidth / 2 - borderThickness / 2, leftHoleXOffset, -bottomHeight + leftHoleHeight / 2],
      cut
    );
    bottomLeftBorderFinal = subtract(bottomLeftBorderFinal, pos);
  }

  // Top inner borders (anchored at z=0, grow upward)
  const topZ = topHeight / 2;
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

  // Top cover above the inner borders
  const topCoverZ = topHeight + borderThickness / 2;
  let topCover = translate(
    [0, 0, topCoverZ],
    cuboid({ size: [topInnerWidth + cornerOverlap, topInnerDepth + cornerOverlap, borderThickness] })
  );

  // Carve SVG into top cover if provided
  if (svgContent) {
    try {
      console.log('Processing SVG with fallback parser...');

      // Use our simple SVG parser
      const shapes = parseSimpleSvg(svgContent);

      if (shapes && shapes.length > 0) {
        // Calculate scale factors to make SVG 50% of model dimensions
        const targetWidth = effectiveWidth * 0.5;
        const targetDepth = effectiveDepth * 0.5;

        // Get bounds of all shapes to determine original size
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;

        shapes.forEach(shape => {
          shape.points.forEach(point => {
            if (Array.isArray(point) && point.length >= 2) {
              minX = Math.min(minX, point[0]);
              maxX = Math.max(maxX, point[0]);
              minY = Math.min(minY, point[1]);
              maxY = Math.max(maxY, point[1]);
            }
          });
        });

        // Validate bounds
        if (minX === Infinity || maxX === -Infinity || minY === Infinity || maxY === -Infinity) {
          console.warn('Could not determine SVG bounds, using default scaling');
          minX = -10; maxX = 10; minY = -10; maxY = 10;
        }

        const svgWidth = maxX - minX;
        const svgHeight = maxY - minY;
        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;

        // Calculate scale to fit within 50% of dimensions while maintaining aspect ratio
        const scaleX = svgWidth > 0 ? targetWidth / svgWidth : 1;
        const scaleY = svgHeight > 0 ? targetDepth / svgHeight : 1;
        const scaleFactor = Math.min(scaleX, scaleY);

        console.log('SVG processing:', {
          originalBounds: { minX, maxX, minY, maxY },
          svgSize: { width: svgWidth, height: svgHeight },
          targetSize: { width: targetWidth, depth: targetDepth },
          scaleFactor,
          shapesCount: shapes.length
        });

        shapes.forEach((shape, index) => {
          try {
            if (shape.points && shape.points.length >= 3) {
              // Create a 2D polygon from the points
              const scaledPoints = shape.points.map(point => [
                (point[0] - centerX) * scaleFactor,
                (point[1] - centerY) * scaleFactor
              ]);

              console.log(`Processing shape ${index} with ${scaledPoints.length} points:`, scaledPoints);

              // Create a 2D polygon using the correct JSCAD method
              const shape2d = polygon({ points: scaledPoints });

              // Extrude the 2D shape upward to create a 3D volume
              const extruded = extrudeLinear({ height: borderThickness + 0.2 }, shape2d);

              // Position the extruded shape to cut through the top cover
              // The shape should start slightly below the top cover and extend through it
              const positioned = translate([0, 0, topCoverZ - borderThickness - 0.1], extruded);

              // Subtract the positioned shape from the top cover
              topCover = subtract(topCover, positioned);

              console.log(`Successfully carved shape ${index} into top cover`);
            }
          } catch (shapeError) {
            console.warn(`Error processing SVG shape ${index}:`, shapeError);
            console.error('Shape error details:', shapeError);

            // Simple fallback: create a small rectangular cutout to show something is happening
            try {
              if (shape.points && shape.points.length >= 1) {
                const point = shape.points[0];
                const scaledX = (point[0] - centerX) * scaleFactor;
                const scaledY = (point[1] - centerY) * scaleFactor;

                console.log(`Creating fallback cutout at [${scaledX}, ${scaledY}]`);

                const fallbackCutout = translate(
                  [scaledX, scaledY, topCoverZ - borderThickness - 0.1],
                  cuboid({ size: [5, 5, borderThickness + 0.2] })
                );

                topCover = subtract(topCover, fallbackCutout);
                console.log(`Created fallback cutout for shape ${index}`);
              }
            } catch (fallbackError) {
              console.warn(`Fallback also failed for shape ${index}:`, fallbackError);
            }
          }
        });
      } else {
        console.warn('No valid shapes found in SVG');
      }
    } catch (error) {
      console.error('Error processing SVG:', error);
      console.warn('SVG carving failed, continuing without it');
    }
  }

  // Return all pieces
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
