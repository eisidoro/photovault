import { publicProcedure } from "@/server/trpc";

import { router } from "@/server/trpc";

export const userRouter = router({
  getUser: publicProcedure.query(async ({ ctx }) => {
    return {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
    };
  }),
});
