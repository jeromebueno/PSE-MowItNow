const Position = require ('./utils/position')
const Orientation = require ('./utils/orientation')

class Mower {
    constructor(position,orientation) {
        this.position = new Position(position.x,position.y)
        this.orientation = new Orientation(orientation)
    }

    move(movement){
        if(movement == "A"){
            let deplacement = this.haveTheMove()
            this.position.add(deplacement.x,deplacement.y)
        }

        if(movement == "G" || movement == "D"){
           this.orientation.pivote(movement)
        }
    }

    haveTheMove(){
        let deplacement = {x:0,y:0}
        if(this.orientation.code == "N") deplacement.y = 1
        if(this.orientation.code == "E") deplacement.x = 1
        if(this.orientation.code == "S") deplacement.y = -1
        if(this.orientation.code == "W") deplacement.x = -1
        return deplacement
    }
}

module.exports = Mower