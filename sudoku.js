let line = [];
let pillar = [];
let boxes = [];

for (let i = 0; i < 9; i++) {
    line.push([]);
    pillar.push([]);
    boxes.push([]);
}

function isValidSudoku(board) {
    //line LOOPS
    for (let i = 0; i < board.length; i++) {
        //pillar LOOPS
        for (let j = 0; j < board.length; j++) {

            let cell = board[i][j];

            if (cell !== ".") {
                if (line[i].includes(cell)) {
                    return false;
                } else line[i].push(cell);

                if (pillar[j].includes(cell)) {
                    return false;
                } else pillar[j].push(cell);

                let boxIndex = Math.floor((i / 3)) * 3 + Math.floor(j / 3);

                if (boxes[boxIndex].includes(cell)) {
                    return false;
                } else boxes[boxIndex].push(cell);

            };
        };
    };

    return true;

};

const boardTrue = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const boardFalse = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

//True
console.log(isValidSudoku(boardTrue));

//False
console.log(isValidSudoku(boardFalse));