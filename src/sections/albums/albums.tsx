import { AlbumsList } from "@/components/albums/albums-list";
import { useUsers } from "@/hooks/use-users";
import { useParams } from "next/navigation";
import { PageHeader } from "@/components/common/page-header";

export function Albums() {
  const { userId } = useParams();
  const { currentUser } = useUsers({ userId: userId as string });
  return (
    <>
      <PageHeader title={`${currentUser?.name} > Albums`} backButton />
      <AlbumsList />
    </>
  );
}
