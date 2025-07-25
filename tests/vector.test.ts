import { Vector3 } from '../src/vector';

test('add adds components', () => {
  const a = new Vector3(1, 2, 3);
  const b = new Vector3(4, 5, 6);
  const result = a.add(b);
  expect(result).toEqual({ x: 5, y: 7, z: 9 });
});
