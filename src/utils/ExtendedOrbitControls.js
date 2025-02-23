import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ExtendedOrbitControls overrides the clamping of the polar angle,
// allowing full vertical (and horizontal) rotation.
class ExtendedOrbitControls extends OrbitControls {
  update() {
    const offset = new THREE.Vector3();
    // so camera.up is the orbit axis
    const quat = new THREE.Quaternion().setFromUnitVectors(
      this.object.up,
      new THREE.Vector3(0, 1, 0)
    );
    const quatInverse = quat.clone().invert();

    const lastPosition = new THREE.Vector3();
    const lastQuaternion = new THREE.Quaternion();

    const position = this.object.position;
    offset.copy(position).sub(this.target);
    // rotate offset to "Y-up" space
    offset.applyQuaternion(quat);

    // convert to spherical coordinates
    const spherical = new THREE.Spherical();
    spherical.setFromVector3(offset);

    if (this.autoRotate && this.state === this.STATE.NONE) {
      this.rotateLeft(this.getAutoRotationAngle());
    }

    // Apply accumulated changes without clamping the polar angle.
    spherical.theta += this.sphericalDelta.theta;
    spherical.phi += this.sphericalDelta.phi;

    // Instead of clamping spherical.phi to [minPolarAngle, maxPolarAngle],
    // we let it wrap freely. (We optionally normalize it to avoid large numbers.)
    spherical.phi = ((spherical.phi % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Optionally, you can clamp the radius (zoom) if needed:
    spherical.radius = Math.max(this.minDistance, Math.min(this.maxDistance, spherical.radius));

    // convert back to Cartesian coordinates
    offset.setFromSpherical(spherical);
    // rotate offset back to "camera-up" space
    offset.applyQuaternion(quatInverse);

    position.copy(this.target).add(offset);
    this.object.lookAt(this.target);

    if (this.enableDamping === true) {
      this.sphericalDelta.theta *= (1 - this.dampingFactor);
      this.sphericalDelta.phi *= (1 - this.dampingFactor);
    } else {
      this.sphericalDelta.set(0, 0, 0);
    }

    // dispatch change event if the position has changed
    if (
      lastPosition.distanceToSquared(this.object.position) > Number.EPSILON ||
      8 * (1 - lastQuaternion.dot(this.object.quaternion)) > Number.EPSILON
    ) {
      this.dispatchEvent({ type: 'change' });
      lastPosition.copy(this.object.position);
      lastQuaternion.copy(this.object.quaternion);
    }

    return true;
  }
}

export { ExtendedOrbitControls };

