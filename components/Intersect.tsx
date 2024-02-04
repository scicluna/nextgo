type IntersectProps = {
    intersectState: {
        color: string
        ko: boolean
        turn: number 
        coordinates: [string, number]   
    }
    updateBoardState: (coordinates: [string, number]) => void
}

export default function Intersect(){
    return (
        <div className="h-full w-full relative">
            <div className="absolute h-4 w-4 cursor-pointer -translate-x-[.375rem] -translate-y-[.375rem]">
                
            </div>
        </div>
    )
}