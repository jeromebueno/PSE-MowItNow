const Orientation = require('../src/utils/orientation')

test('move direction one time', () => {
    const orientation = new Orientation("N")
    orientation.pivote("G")
    expect(orientation.code).toBe("W");
});


test('make complete move', () => {
    const orientation = new Orientation("N")
    orientation.pivote("D")
    orientation.pivote("D")
    orientation.pivote("D")
    orientation.pivote("D")
    expect(orientation.code).toBe("N");
});

test('move with wrong sens', () => {
    const orientation = new Orientation("N")
    orientation.pivote("Wrong")
    expect(orientation.code).toBe("N");
});