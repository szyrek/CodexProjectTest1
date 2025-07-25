import { Vector3 } from '../src/vector';

test('add adds components', () => {
  const a = new Vector3(1, 2, 3);
  const b = new Vector3(4, 5, 6);
  const result = a.add(b);
  expect(result).toEqual({ x: 5, y: 7, z: 9 });
});

test('subtract subtracts components', () => {
  const a = new Vector3(5, 7, 9);
  const b = new Vector3(1, 2, 3);
  const result = a.subtract(b);
  expect(result).toEqual({ x: 4, y: 5, z: 6 });
});

test('scale multiplies each component', () => {
  const v = new Vector3(1, -2, 3);
  const result = v.scale(2);
  expect(result).toEqual({ x: 2, y: -4, z: 6 });
});
