import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args: { name: v.string() },
    handler: async(ctx, args) => {
        const userId = await ctx.db.insert("user", {
            name: args.name
        })
        return userId
    }
})