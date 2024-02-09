import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    user: defineTable({
        name: v.string(),
    }),
    board: defineTable({
        whiteId: v.id("user"),
        blackId: v.id("user"),    
        boardState: v.array(v.array(v.object({
            color: v.string(),
            ko: v.boolean(),
            turn: v.number(),
        }))),
        captures: v.object({
            white: v.number(),
            black: v.number(),
        }),
        currentTurn: v.number(),
        turnTimeStart: v.string(),
        time: v.object({
            white: v.number(),
            //wbyo omi
            black: v.number(),
            //bbyo omi
        }),
    })
});