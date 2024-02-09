type IntersectProps = {
    intersectState: {
        color: string
        ko: boolean
        turn: number 
        coordinates: [number, number]   
    }
    updateBoardState: (coordinates: [number, number]) => void
}

export default function Intersect({intersectState, updateBoardState}: IntersectProps){

    const color = determineColor(intersectState.color)
    const ko = intersectState.ko
    const turn = intersectState.turn

    return (
        <div className="h-full w-full relative">
            <div className="absolute h-4 w-4 cursor-pointer -translate-x-[.375rem] -translate-y-[.375rem]">
                
            </div>
        </div>
    )

    function determineColor(color: string){
        if (color === "black"){
            return "bg-black"
        }
        if (color === "white"){
            return "bg-white"
        }
        return "bg-transparent"
    }
}
