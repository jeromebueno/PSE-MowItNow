const Lawn = require('./lawn')
const Mower = require ('./mower')
const Position = require ('./utils/position')
const {ADVANCE } = require('./utils/constants')

class Monitor {
    static async perfomMowing(instruction){
        const lawn = new Lawn(instruction[0][0],instruction[0][1])
        instruction.shift()

        if(instruction.length % 2 !== 0) throw new Error('Les instructions sont incomplètes')
        
        for (var i = 0; i < instruction.length - 1; i += 2) {
            let initialPosition = {x:instruction[i][0],y:instruction[i][1]}
            let orientation = instruction[i][2]
            let route = instruction[i+1]

            if(lawn.isIn(initialPosition)){
                console.log(await this.mow(lawn,initialPosition,orientation,route))
            }else{
                throw new Error('La position de la tondeuse est en dehors de la pelouse')
            }
          }
    }

    static mow(lawn,initialPosition,orientation,route){
        let mower = new Mower(initialPosition,orientation)
        for(let movement of route){
            let previousPosition = new Position(mower.position.x,mower.position.y)
            mower.move(movement)
            if(movement === ADVANCE && !lawn.isIn(mower.position)){
                mower.position = previousPosition
            }
        }
        return `${mower.position.x} ${mower.position.y} ${mower.orientation.code}`
    }
}

module.exports = Monitor
