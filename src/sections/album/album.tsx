import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useUserAlbums } from "@/hooks/use-user-albums";
import { useUsers } from "@/hooks/use-users";
import { PageHeader } from "@/components/common/page-header";
import { AlbumList } from "@/components/album/album-list";

export function Album() {
  const { userId, albumId } = useParams();
  const { currentUser } = useUsers({ userId: userId as string });
  const { albums } = useUserAlbums(userId as string);

  const currentAlbumTitle = useMemo(() => {
    const album = albums?.find((album) => album.id === Number(albumId));
    return album?.title;
  }, [albums, albumId]);

  return (
    <>
      <PageHeader
        title={`${currentUser?.name} > Album: ${currentAlbumTitle}`}
        backButton
      />
      <AlbumList />
    </>
  );
}
