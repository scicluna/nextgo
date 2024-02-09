import { generateBoard } from "@/app/utils/defaultBoard";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createBoard = mutation({
    args: { whiteId: v.id("user"), blackId: v.id("user"), time:v.number(), handicap:v.number(), size: v.number() },
    handler: async(ctx, args) => {
        const board = generateBoard(args.size, args.handicap)
        const boardId = await ctx.db.insert("board", {
        whiteId: args.whiteId,
        blackId: args.blackId,    
        boardState: board,
        captures:{
            white: 0,
            black: 0,
        },
        currentTurn: 0,
        turnTimeStart: new Date().toLocaleDateString(),
        time: {
            white: args.time,
            //wbyo omi
            black: args.time,
            //bbyo omi
        },
        })
        return boardId
    }
})