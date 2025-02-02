import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { userRouter } from "./user-router";

export const appRouter = createTRPCRouter({
  user: userRouter,
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
