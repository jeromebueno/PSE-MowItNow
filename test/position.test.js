const Position = require('../src/utils/position')

test('add value to position', () => {
    const position = new Position(2,4)
    position.add(1,0)
    expect(position.x).toBe(3);
    expect(position.y).toBe(4);
});
