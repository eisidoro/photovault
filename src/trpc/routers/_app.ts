import { createTRPCRouter } from "../init";
import { userRouter } from "./user-router";
import { albumRouter } from "./album-router";

export const appRouter = createTRPCRouter({
  user: userRouter,
  albums: albumRouter,
});

export type AppRouter = typeof appRouter;
