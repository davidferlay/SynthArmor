// src/jscad/geometry.js
import * as modeling from '@jscad/modeling';
const { cuboid } = modeling.primitives;

export function createGeometry({ width, length }) {
  // Return an array of geometry objects for the STL serializer
  return [
    cuboid({ size: [width, length, 10] })
  ];
}

