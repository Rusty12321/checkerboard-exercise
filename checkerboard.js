function square() {
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    return square;
}

function blackSquare() {
        let blackSquare = square();
        blackSquare.style.backgroundColor = 'black';
        document.body.append(blackSquare);
}

function redSquare() {
    let redSquare = square();
    redSquare.style.backgroundColor = 'red';
    document.body.append(redSquare);

}


function buildCheckerboard() {
    for (let i = 0; i < 40; i++) {
        blackSquare();
        redSquare();
    }
    blackSquare();
}



buildCheckerboard();