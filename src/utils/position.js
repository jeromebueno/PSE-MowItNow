class Position {
    constructor(x,y) {
        this.x = x
        this.y = y
    }

    add(x,y){
        this.x += x
        this.y += y
    }
}

module.exports = Position