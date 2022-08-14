const container = document.querySelector('.container');
const board = document.querySelector('.board');

let sizeNum = 100;
// Function to create a number of divs in rows in which there are cells so it makes a square, using loops.
function createGrid (sizeNum) {
    for(let i = 0; i < sizeNum; i++) {
        const row = document.createElement("div");
        row.classList.add('grid-row')
// Cells will fill out the hardcoded size of the board with cellSize value.
        for(let j = 0; j < sizeNum; j++) {
            const cell = document.createElement("div");
            cell.classList.add('grid-cell')
            const cellSize = 480 / sizeNum
            cell.style.width = `${cellSize}px`
            cell.style.height = `${cellSize}px`
            cell.addEventListener('mouseover', changeColor) // Event listener to hover when holding mouse down and moving at the same time
            cell.addEventListener('mousedown', changeColor)
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

createGrid(sizeNum)


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
// Clicked hover effect function
function changeColor(e) {
    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = 'black'
    }
}

function newSize () {
    const boardSize = document.querySelector('#sizeSelector').value;
    
    if (boardSize === "16") {
        sizeNum = 16;
        
    } else if (boardSize === '32') {
        sizeNum = 32;
        
    } else if (boardSize === '64') {
        sizeNum = 64;
        
    }
    document.querySelectorAll(".grid-cell").forEach(e => e.remove());   //Removes existing cells so it doesn't duplicate.
    console.log(sizeNum);
    createGrid(sizeNum);
}
newSize()

