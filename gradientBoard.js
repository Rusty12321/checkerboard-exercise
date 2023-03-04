function sqaure() {
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.paddingBottom = '11.1%';
    square.style.float = 'left';
    return square;
}

function blueSquares(num1, num2, num3) {
    let blueSquare = sqaure();
    blueSquare.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`; // (0,191,255) to (0, 0, 255) changes each time by (0, 4.66, 0)
    document.body.append(blueSquare);
}

function redSquares(num1, num2, num3) {
    let redSquare = sqaure();
    redSquare.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`; //  (255,0,0) to (240, 128, 128) changes each time by (.375, 3.2, 3.2)
    document.body.append(redSquare);
}

function gradientBoard() {
    let blueNum1 = 0;
    let blueNum2 = 191;
    let blueNum3 = 255;
    let redNum1 = 255;
    let redNum2 = 0;
    let redNum3 = 0;
    for (let i = 0; i < 40; i++) {
        blueSquares(blueNum1, blueNum2, blueNum3);
        redSquares(redNum1, redNum2, redNum3);
        blueNum2 -= 4.66;
        redNum1 += .375;
        redNum2 += 3.2;
        redNum3 += 3.2;
    }
    blueSquares(blueNum1, blueNum2, blueNum3);
}

gradientBoard();