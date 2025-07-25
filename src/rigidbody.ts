import { Vector3 } from './vector';

/**
 * Simple rigid body with Euler integration using variable delta time.
 */
export class RigidBody {
  position: Vector3;
  velocity: Vector3;
  acceleration: Vector3;
  mass: number;

  constructor(
    position: Vector3 = new Vector3(0, 0, 0),
    velocity: Vector3 = new Vector3(0, 0, 0),
    mass = 1
  ) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = new Vector3(0, 0, 0);
    this.mass = mass;
  }

  /** Apply an instantaneous force to the body. */
  applyForce(force: Vector3): void {
    const deltaAcc = force.scale(1 / this.mass);
    this.acceleration = this.acceleration.add(deltaAcc);
  }

  /**
   * Integrate velocity and position using the provided delta time.
   * Accumulated acceleration is cleared after each step.
   */
  integrate(delta: number): void {
    this.velocity = this.velocity.add(this.acceleration.scale(delta));
    this.position = this.position.add(this.velocity.scale(delta));
    this.acceleration = new Vector3(0, 0, 0);
  }
}

export function updateBodies(bodies: RigidBody[], delta: number): void {
  for (const body of bodies) {
    body.integrate(delta);
  }
}
