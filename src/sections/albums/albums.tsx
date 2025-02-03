import { AlbumsList } from "@/components/albums/albums-list";
import { useUsers } from "@/hooks/use-users";
import { useParams } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";
import { useUserAlbums } from "@/hooks/use-user-albums";

export function Albums() {
  const { userId } = useParams();
  const { currentUser } = useUsers({ userId: userId as string });
  const { albums, isLoading } = useUserAlbums(userId as string);

  return (
    <>
      <PageHeader title={`${currentUser?.name} > Albums`} backButton />
      <AlbumsList
        albums={albums ?? []}
        isLoading={isLoading}
        userId={userId as string}
      />
    </>
  );
}
