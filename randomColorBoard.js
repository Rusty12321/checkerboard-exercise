function square() {
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    return square;
}

function randomColorSquare() {
    let colorSquare = square();
    colorSquare.style.backgroundColor = `rgb(${randomNumForColor()}, ${randomNumForColor()}, ${randomNumForColor()})`;
    document.body.append(colorSquare);
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