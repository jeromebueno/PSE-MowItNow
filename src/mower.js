const Position = require ('./utils/position')
const Orientation = require ('./utils/orientation')
const { NORTH, SOUTH, EST, WEST, ADVANCE, LEFT, RIGHT, } = require('./utils/constants')

class Mower {
    constructor(position,orientation) {
        this.position = new Position(position.x,position.y)
        this.orientation = new Orientation(orientation)
    }

    move(movement){
        if(movement === ADVANCE){
            let deplacement = this.haveTheMove()
            this.position.add(deplacement.x,deplacement.y)
        }

        if(movement === LEFT || movement === RIGHT){
           this.orientation.pivote(movement)
        }
    }

    haveTheMove(){
        let deplacement = {x:0,y:0}
        if(this.orientation.code === NORTH) deplacement.y = 1
        if(this.orientation.code === EST) deplacement.x = 1
        if(this.orientation.code === SOUTH) deplacement.y = -1
        if(this.orientation.code === WEST) deplacement.x = -1
        return deplacement
    }
}

module.exports = Mower