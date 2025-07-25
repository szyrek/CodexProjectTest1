import { RigidBody } from '../src/rigidbody';
import { Vector3 } from '../src/vector';

test('integrate updates position and velocity with delta time', () => {
  const body = new RigidBody(new Vector3(0, 0, 0), new Vector3(0, 0, 0));
  body.applyForce(new Vector3(1, 0, 0)); // acceleration of 1 in x
  body.integrate(1);
  expect(body.velocity).toEqual({ x: 1, y: 0, z: 0 });
  expect(body.position).toEqual({ x: 1, y: 0, z: 0 });
});

test('smaller delta results in smaller change', () => {
  const body = new RigidBody(new Vector3(0, 0, 0), new Vector3(0, 0, 0));
  body.applyForce(new Vector3(1, 0, 0));
  body.integrate(0.5);
  expect(body.velocity.x).toBeCloseTo(0.5);
  expect(body.position.x).toBeCloseTo(0.25);
});
