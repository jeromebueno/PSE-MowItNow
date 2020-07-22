const Monitor = require('./src/monitor')

const  instruction = [
  [5,5],
  [1,2,'N'],
  ['G','A','G','A','G','A','G','A','A'],
  [3,3,'E'],
  ['A','A','D','A','A','D','A','D','D','A']
]

Monitor.perfomMowing(instruction)