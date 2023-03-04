let board = document.createElement('div');
board.classList.add('squaresParent');
document.body.append(board);

function square() {
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    square.classList.add('square');
    return square;
}

function randomColorSquare() {
    let colorSquare = square();
    colorSquare.style.backgroundColor = `rgb(${randomNumForColor()}, ${randomNumForColor()}, ${randomNumForColor()})`;
    board.append(colorSquare);
}

function randomNumForColor() {
    let randomNum = Math.random() * (255 - 0) + 0;
    return Math.floor(randomNum);
}

function buildRandomColorCheckerboard() {
    for (let i = 0; i < 81; i++) {
        randomColorSquare();
    }
}

buildRandomColorCheckerboard();

setInterval(function() {
    board.replaceChildren()
    buildRandomColorCheckerboard();
}, 2000);