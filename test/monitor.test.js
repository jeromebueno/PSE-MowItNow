const Monitor = require('../src/monitor');
const Lawn = require('../src/lawn')

const  instruction = [
  [5,5],
  [1,2,'N'],
  ['G','A','G','A','G','A','G','A','A'],
  [3,3,'E'],
  ['A','A','D','A','A','D','A','D','D','A']
]

test('test if return correct direction', async() => {
    const consoleSpy = jest.spyOn(console, 'log');

    await Monitor.perfomMowing(instruction)

    expect(consoleSpy).toHaveBeenCalledWith('1 3 N');
    expect(consoleSpy).toHaveBeenCalledWith('5 1 E');
});

test('throw error if not correct instruction (array size)', async() => {
  let wrongInstruction = [
    [5,5],
    [1,2,'N'],
    ['G','A','G','A','G','A','G','A','A'],
    ['A','A','D','A','A','D','A','D','D','A']
  ]

  await expect(() => Monitor.perfomMowing(wrongInstruction)).rejects.toEqual(TypeError('Les instructions sont incomplètes'));
});

test('throw error if mower outside lawn', async() => {
  let instructionWithWrongPosition = [
    [5,5],
    [6,5,'N'],
    ['G','A','G','A','G','A','G','A','A'],
  ]
  await expect(() => Monitor.perfomMowing(instructionWithWrongPosition)).rejects.toEqual(TypeError('La position de la tondeuse est en dehors de la pelouse'));
});

test('test if get same position if mow outside position', async() => {
  const consoleSpy = jest.spyOn(console, 'log');

  const lawn = new Lawn(5,5)
  await Monitor.mow(lawn,{x:5,y:5},"N","A")
  
  expect(consoleSpy).toHaveBeenCalledWith('5 5 N');
});

