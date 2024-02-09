import { query } from "./_generated/server";
import { v } from "convex/values";

export const getBoardState = query({
    args: { id: v.id("board") },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.id);
    }
})