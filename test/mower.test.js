const Mower = require('../src/mower');

test('initialize mower', () => {
    const mower = new Mower({x:2,y:4},"E")
    expect(mower.position.x).toBe(2);
    expect(mower.position.y).toBe(4);
    expect(mower.orientation.code).toBe("E");
});

test('move mower with instruction', () => {
    const mower = new Mower({x:2,y:4},"E")
    mower.move("D")
    mower.move("D")
    expect(mower.orientation.code).toBe("W");
    mower.move("A")
    expect(mower.position).toEqual({x:1,y:4});
});

test('get futur move to do', () => {
    const mower = new Mower({x:2,y:4},"N")
    expect(mower.haveTheMove()).toEqual({x:0,y:1});
});
