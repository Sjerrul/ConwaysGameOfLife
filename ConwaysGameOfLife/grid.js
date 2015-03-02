function Grid(size, doPrefill) {
    this.size = size;

    this.gridArray = new Array(size);
    for (var i = 0; i < size; i++) {
        this.gridArray[i] = new Array(size);
        for (var j = 0; j < size; j++) {
            var random = Math.random();
            var value = CELLSTATE.dead;
            if (doPrefill) {
                value = (random < (1 - SETTINGS.startpercentageOfLiveCells)) ? CELLSTATE.dead : CELLSTATE.alive;
            }
            this.gridArray[i][j] = value;
        }
    }

}

Grid.prototype = {
    get: function (x, y) {
        if (x > this._size - 1 || y > this._size - 1) {
            throw new Error("One of the paramters are out of bounds. Size of the grid is " + this._size + ".")
        }
        return this.gridArray[x][y]
    },
    set: function (x, y, value) {
        if (x > this._size - 1 || y > this._size - 1) {
            throw new Error("One of the paramters are out of bounds. Size of the grid is " + this._size + ".")
        }
        this.gridArray[x][y] = value;
    },
    numberOfNeighbours: function (x, y) {
        var numberOfNeighbours = 0;
        for (var i = -1; i <= 1; i++) {
            for (var j = -1; j <= 1; j++) {
                if (i !== 0 || j !== 0) {
                    numberOfNeighbours += this.isCellAlive(x + i, y + j) ? 1 : 0;
                }
            }
        }

        return numberOfNeighbours;
    },
    isCellAlive: function(x, y) {
        if (x < 0 || y < null || x > this.size - 1 || y > this.size - 1) {
            return false;
        }
        return this.gridArray[x][y] === CELLSTATE.alive
    }
}