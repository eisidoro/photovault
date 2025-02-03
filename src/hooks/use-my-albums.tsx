import { trpc } from "@/trpc/client";

export const useMyAlbums = () => {
  const [data] = trpc.albums.getAlbums.useSuspenseQuery();

  return { albums: data.albums, userId: data.userId };
};
