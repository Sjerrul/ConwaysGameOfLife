function Render(game) {
    this.step = 1 / SETTINGS.renderFps;

    this.canvas = Dom.get('canvas');
    this.canvas.width = SETTINGS.canvasWidth;
    this.canvas.height = SETTINGS.canvasWidth;

    this.canvas.offset = { left: this.canvas.offsetLeft, top: this.canvas.offsetTop };
    this.canvas.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    this.ctx = this.canvas.getContext('2d');
    this.frame = 0;

    this.game = game;
    this.cellSize = SETTINGS.cellSize;
}

Render.prototype = {
    reset: function () {
        this.canvas.width = SETTINGS.canvasWidth;
        this.canvas.height = SETTINGS.canvasHeight;
        this.canvas.offset = { left: this.canvas.offsetLeft, top: this.canvas.offsetTop };
        this.canvas.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        this.ctx = this.canvas.getContext('2d');
        this.frame = 0;
    },
    draw: function (dt) {
        this.ctx.fillStyle = "White";
        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();

        this.ctx.beginPath()
        for (var i = 0; i < this.game.grid.size; i++) {
            for (var j = 0; j < this.game.grid.size; j++) {
                if (this.game.grid.get(i, j) === CELLSTATE.dead) {
                    this.ctx.rect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
                } else {
                    this.ctx.fillStyle = "Black";
                    this.ctx.fillRect(i * this.cellSize, j * this.cellSize, this.cellSize, this.cellSize);
                }
            }
        }
        this.ctx.stroke();
    },

}