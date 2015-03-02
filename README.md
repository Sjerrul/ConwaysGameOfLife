# Conways Game Of Life
A Javascript implementation of Conways Game of Life, OO-Style, using canvas.

## Modules
- Dom.js: Simple module for getting DOM elements
- Engine.js: Entrypoint of the application. Calling Engine() initialises the Game and Render modules, and starts the main game-loop. Using separate FPS values it can update the game logic independant from the render logic, allowing for smoother graphics.
- GameOfLife.js: The business logic of the application. Holds the code that updates the cell values each tick, and holds the Grid that the renderer uses to draw. Also contains the application settings and helpful enums.
- Grid.js: Simpel Grid object, can initialize randomly filled (when starting the game) of empty (when used as a temporary grid during the cell reproduction phase).
- Render.js: the Renderer, uses game state to draw the game on the canvas

## Settings
In the GameOfLife.js file is a SETTINGS block, use that to configure the game
- gridSize: Number of cells per side. Currently only square grids are supported
- startpercentageOfLiveCells: Percentage between 0 and 1 of live cells. 0 means no live cells, 1 means all live cells. Both are not very interesting so use something in between.
- gameFps: Number of times per second the game "ticks". Higher means faster game updates.
- renderFps: Number of times per second the renderer updates the canvas, in this case, anything higher than gameFPS is overkill, but adjustable if you like.
- canvasWidth: self-explanatory
- canvasHeight: self-explanatory
- cellSize: size (in px) each cell takes on the canvas

## TODO
- Support grids with different widt and heights
- Autosizing of canvas based on grid 
