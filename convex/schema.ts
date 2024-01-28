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
        playerBlack: v.id("users"),
        playerWhite: v.id("users"),
        boardState: v.array(v.array(v.array(v.object({
            color: v.string(),
            ko: v.boolean(),
            turn: v.boolean(),
        })))),
    })
});