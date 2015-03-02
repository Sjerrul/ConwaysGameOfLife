var CELLSTATE = {
    dead: 0,
    alive: 1
}

var SETTINGS = {
    gridSize: 50,
    startpercentageOfLiveCells: 0.3,
    gameFps: 2,

    //RenderStuff
    renderFps: 30,
    canvasWidth: 500,
    canvasHeight: 500,
    cellSize: 10,
}

function GameOfLife() {
    this.step = 1 / SETTINGS.gameFps;  // how long is each game frame (in seconds)

    this.grid = new Grid(SETTINGS.gridSize, true);
}

GameOfLife.prototype = {
    reset: function () {
        
    },
    update: function (dt) {
        var updatedGrid = this.calculateUpdatedGrid(this.grid);
        this.grid = updatedGrid;
    },
    calculateUpdatedGrid: function (liveGrid) {
        var temporaryGrid = new Grid(liveGrid.size, false);
        for (var x = 0; x < liveGrid.size; x++) {
            for (var y = 0; y < liveGrid.size; y++) {
                var numberNeighbours = liveGrid.numberOfNeighbours(x, y);
                var value = liveGrid.get(x, y);

                //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
                if (value === CELLSTATE.alive && numberNeighbours < 2) {
                    value = CELLSTATE.dead;
                }

                //Any live cell with two or three live neighbours lives on to the next generation.
                if (value === CELLSTATE.alive && (numberNeighbours === 2 && numberNeighbours === 3)) {
                    value = value;
                }

                //Any live cell with more than three live neighbours dies, as if by overcrowding.
                if (value === CELLSTATE.alive && (numberNeighbours > 3)) {
                    value = CELLSTATE.dead;
                }

                //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
                if (value === CELLSTATE.dead && (numberNeighbours === 3)) {
                    value = CELLSTATE.alive;
                }

                temporaryGrid.set(x, y, value);
            }
        }
        return temporaryGrid;
    },

}