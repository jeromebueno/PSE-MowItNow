class Lawn {
    constructor(width,height) {
        if(width <= 0 && height <= 0) throw new Error('La taille du terrain doit être superieur à 0');
        this.width = width
        this.height = height
    }

    isIn(position){
        return (position.x <= this.width && position.x >= 0) && position.y <= this.height && position.y >= 0
    }
  }

module.exports = Lawn