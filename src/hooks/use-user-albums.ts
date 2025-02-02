import { trpc } from "@/trpc/client";

export const useUserAlbums = (userId: string) => {
  const { data, isLoading } = trpc.user.getUserAlbums.useQuery({ userId });

  return {
    albums: data,
    isLoading,
  };
};
