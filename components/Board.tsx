"use client"
import { calculateBorder, calculateIntersect, calculateStarPoints } from "@/app/utils/htmlCalcs"
import Intersect from "./Intersect"
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

type BoardProps = {
    boardId: Id<"board">
}

export default function Board({boardId}:BoardProps){
    const board = useQuery(api.boardstate.getBoardState, {
        id: boardId
    });
    console.log(board)

    return (
        <main className="w-full h-[100dvh] flex justify-center items-center relative">
            <div className="grid grid-cols-19 !bg-black">
                {board?.boardState.map((row, i) => (
                    <div key={i} className="flex justify-center items-center">
                        {row.map((_, j) => (
                            <div key={j} className={`sm:w-8 sm:h-8 h-4 w-4 bg-white relative ${calculateBorder(i, j)}`}>
                                <div className={`w-1 h-1 bg-red-500 absolute ${calculateIntersect(i, j)} -left-[.25rem] -top-[.25rem]`}>
                                    <div className={` ${calculateStarPoints(i, j)} absolute`}/>
                                    <Intersect intersectState={
                                        {
                                            color: "black",
                                            ko: false,
                                            turn: 0,
                                            coordinates: [i,j]
                                        }
                                    } updateBoardState={() => {}}/>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    )
}

