const cardinalPoints = ["N","E","S","W"]

class Orientation {
    constructor(code) {
        this.direction = cardinalPoints.indexOf(code)
        this.code = code
    }

    pivote(sens){
        switch (sens) {
            case 'G':
                this.direction = this.direction == 0 ? 3 : this.direction -1
              break;
            case 'D':
                this.direction = this.direction == 3 ? 0 : this.direction + 1
              break;
        }
        this.code = cardinalPoints[this.direction]
     }        
    }

module.exports = Orientation