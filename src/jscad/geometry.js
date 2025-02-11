// src/jscad/geometry.js
import { primitives } from '@jscad/modeling';
const { cuboid } = primitives;

export function createGeometry({ width, length }) {
  // Return an array of geometry objects for the STL serializer
  return [
    cuboid({ size: [width, length, 10] })
  ];
}

