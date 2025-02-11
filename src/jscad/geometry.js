// src/jscad/geometry.js
import { cuboid } from '@jscad/modeling/src/primitives/index.js';

export function createGeometry({ width, length }) {
  // Return an array of geometry objects for the STL serializer
  return [
    cuboid({ size: [width, length, 10] })
  ];
}

