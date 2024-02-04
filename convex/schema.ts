import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        id: v.string(),
        name: v.string(),
        created_at: v.string(),
        updated_at: v.string()
    }),
    board: defineTable({
        id: v.string(),
        whiteId: v.id("users"),
        blackId: v.id("users"),    
        boardState: v.array(v.array(v.array(v.object({
            color: v.string(),
            ko: v.boolean(),
            turn: v.number(),
            coordinates: v.object({
                x: v.string(),
                y: v.number()
            })
        })))),
        captures: v.object({
            white: v.number(),
            black: v.number(),
        }),
        time: v.object({
            white: v.number(),
            black: v.number(),
        }),
    })
});