export function generateBoard(size: number, handicap: number, ){

    let board = new Array(size).fill(null).map(() => 
        new Array(size).fill(null).map(() => ({ ...defaultIntersect }))
    );
    console.log(size)
    console.log("Board", board)

    if (handicap > 1 && handicap <= 9 && (handicapPositions[size as keyof typeof handicapPositions] as { [key: number]: number[][] })[handicap]) {
        (handicapPositions[size as keyof typeof handicapPositions] as { [key: number]: number[][] })[handicap].forEach(([row, col]) => {
            board[row][col] = { ...defaultIntersect, color: "black" };
        });
    }
    return board
}

const defaultIntersect = {
    color: "none",
    ko: false,
    turn: -1,
}

const handicapPositions = {
    19: {
        2: [[3,3], [15,15]],
        3: [[3,3], [15,15], [15, 3]],
        4: [[3,3], [15,15], [15,3], [3,15]],
        5: [[3,3], [15,15], [15,3], [3,15], [9,9]],
        6: [[3,3], [15,15], [15,3], [3,15], [9,15], [9,3]],
        7: [[3,3], [15,15], [15,3], [3,15], [9,15], [9,3], [9,9]],
        8: [[3,3], [15,15], [15,3], [3,15], [9,15], [9,3], [9,9], [3,9]],
        9: [[3,3], [15,15], [15,3], [3,15], [9,15], [9,3], [9,9], [3,9], [15,9]]
    },
    13: {
        2: [[3,3], [9,9]],
        3: [[3,3], [9,9], [9,3]],
        4: [[3,3], [9,9], [9,3], [3,9]],
        5: [[3,3], [9,9], [9,3], [3,9], [6,6]],
        6: [[3,3], [9,9], [9,3], [3,9], [6,9], [6,3]]
    },
    9: {
        2: [[2,2], [6,6]],
        3: [[2,2], [6,6], [6,2]],
        4: [[2,2], [6,6], [6,2], [2,6]],
    }
}