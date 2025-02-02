import { env } from "@/config/env";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";

import { User } from "@/types/user";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  getUsers: baseProcedure.query(async ({ ctx }) => {
    try {
      const response = await fetch(env.NEXT_PUBLIC_USERS_API);
      const data = await response.json();
      return data as User[];
    } catch (error) {
      if (error instanceof TRPCError) {
        throw error;
      }
    }
  }),
});
