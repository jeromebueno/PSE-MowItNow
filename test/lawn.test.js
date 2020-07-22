const Lawn = require('../src/lawn');

test('initialize lawn with wrong', () => {
    expect(() => new Lawn(0,0)).toThrow('La taille du terrain doit être superieur à 0');
});

test('check if position is in lawn', () => {
  const lawn = new Lawn(5,4)
  expect(lawn.isIn({x:5,y:3})).toBe(true);
});

test('check if position is not in lawn', () => {
  let lawn = new Lawn(5,4)
  expect(lawn.isIn({x:5,y:7})).toBe(false);
});
