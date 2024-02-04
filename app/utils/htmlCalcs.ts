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