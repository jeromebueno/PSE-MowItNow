const { CARDINAL_POINTS, LEFT, RIGHT } = require('./constants')

class Orientation {
    constructor(code) {
        this.direction = CARDINAL_POINTS.indexOf(code)
        this.code = code
    }

    pivote(sens){
        switch (sens) {
            case LEFT:
                this.direction = this.direction === 0 ? 3 : this.direction -1
              break;
            case RIGHT:
                this.direction = this.direction === 3 ? 0 : this.direction + 1
              break;
        }
        this.code = CARDINAL_POINTS[this.direction]
     }        
    }

module.exports = Orientation