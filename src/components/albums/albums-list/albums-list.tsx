import { useUserAlbums } from "@/hooks/use-user-albums";
import { AlbumsListItem } from "../albums-list-item";
import styles from "./albums-list.module.css";
import Link from "next/link";

interface AlbumsListProps {
  userId: string;
}

export const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { albums, isLoading } = useUserAlbums(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["albums-list__container"]}>
      {albums?.map((album) => (
        <Link href={`/user/${userId}/albums/${album.id}`} key={album.id}>
          <AlbumsListItem album={album} />
        </Link>
      ))}
    </div>
  );
};
