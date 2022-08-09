const container = document.querySelector('.container');
const board = document.querySelector('.board');
let sizeNum = 16;
// Function to create a number of divs in rows in which there are cells so it makes a square, using loops.
function createGrid (sizeNum) {

    for(let i = 0; i < sizeNum; i++) {
        const row = document.createElement("div");
        row.classList.add('grid-row')
// Cells will fill out the hardcoded size of the board with cellSize value.
        for(let j = 0; j < sizeNum; j++) {
            const cell = document.createElement("div");
            cell.classList.add('grid-cell')
            const cellSize = 960 / sizeNum
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

createGrid(sizeNum)