import { trpc } from "@/app/_trpc/client";

export const useUser = () => {
  const { data } = trpc.user.getUser.useQuery();
  return data;
};
