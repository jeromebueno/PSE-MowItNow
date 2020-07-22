const cardinalPoints = ["N","E","S","W"]

class Orientation {
    constructor(code) {
        this.direction = cardinalPoints.indexOf(code)
        this.code = code
    }

    pivote(sens){
        let direction = this.direction
        switch (sens) {
            case 'G':
                direction = this.direction == 0 ? 3 : this.direction -1
              break;
            case 'D':
                direction = this.direction == 3 ? 0 : this.direction + 1
              break;
        }
        this.direction = direction
        this.code = cardinalPoints[direction]
     }        
    }

module.exports = Orientation