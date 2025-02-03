import { trpc } from "@/trpc/client";

export const useAlbum = (albumId: string) => {
  const { data, isLoading } = trpc.user.getAlbumPhotos.useQuery({
    albumId,
  });

  return {
    photos: data,
    isLoading,
  };
};
