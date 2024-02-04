import { calculateBorder, calculateIntersect, calculateStarPoints } from "@/app/utils/htmlCalcs"
import Intersect from "./Intersect"

export default function Board(){
    // const boardState = useQuery(api.boardstate.get);
    const exBoardState = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ]

    return (
        <main className="w-full h-[100dvh] flex justify-center items-center relative">
            <div className="grid grid-cols-19 !bg-black">
                {exBoardState.map((row, i) => (
                    <div key={i} className="flex justify-center items-center">
                        {row.map((_, j) => (
                            <div key={j} className={`sm:w-8 sm:h-8 h-4 w-4 bg-white relative ${calculateBorder(i, j)}`}>
                                <div className={`w-1 h-1 bg-red-500 absolute ${calculateIntersect(i, j)} -left-[.25rem] -top-[.25rem]`}>
                                    <div className={` ${calculateStarPoints(i, j)} absolute`}/>
                                    <Intersect/>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    )
}

