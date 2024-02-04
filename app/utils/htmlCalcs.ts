export function calculateBorder(row: number, col: number, boardSize: number = 19){
    if(row === 0){
        if (col === boardSize-1){
            return "border-black border-l-[.125rem]";
        }
        if (col === 0){
            return "border-black border-l-[.25rem] border-t-[.25rem] border-[.125rem]";
        }
        return "border-black border-t-[.25rem] border-[.125rem]"
    }


    if (col === 0){
        if (row === boardSize-1){
            return "border-black border-t-[.125rem]";
        }
        return "border-black border-l-[.25rem] border-[.125rem]"
    }
    
    if(row === boardSize-1){
        if (col === boardSize-1){
            return
        }
        return "border-black border-t-[.125rem]"
    }

    if(col === boardSize-1){
        if (row === boardSize-1){
            return
        }
        return "border-black border-l-[.125rem]"
    }

    return "border-black border-[.125rem]"
}

export function calculateIntersect(row: number, col: number, boardSize: number = 19){
    if (row === 0){
        if (col == boardSize-1){
            return "translate-y-[.25rem]"
        }
    }
    if (row == boardSize-1){
        if (col === 0){
            return "translate-x-[.25rem]"
        }
        if (col === boardSize-1){
            return "translate-x-[.125rem] translate-y-[.125rem]"
        }
        return "translate-x-[.125rem]"
    }

    if (col == boardSize-1){
        if (row === 0){
            return "translate-y-[.25rem]"
        }
        return "translate-y-[.125rem]"
    }

    return "-translate-[.25rem]"
}

export function calculateStarPoints(row: number, col: number, boardSize: number = 19): string {
    // Define star points for different board sizes
    const starPoints: { [key: number]: number[][] } = {
        19: [[3, 3], [3, 9], [3, 15], [9, 3], [9, 9], [9, 15], [15, 3], [15, 9], [15, 15]],
        13: [[3, 3], [3, 9], [6, 6], [9, 3], [9, 9]],
        9: [[2, 2], [2, 6], [6, 2], [6, 6]],
    };

    // Common style for star points
    const starPointStyle = "!bg-black rounded-full h-3 w-3 -translate-x-[.25rem] -translate-y-[.25rem]";

    // Check if the current position is a star point for the given board size
    if (starPoints[boardSize].some(([r, c]) => row === r && col === c)) {
        return starPointStyle;
    }
  
    return " -left-[.25rem] -top-[.25rem]";
  }
  