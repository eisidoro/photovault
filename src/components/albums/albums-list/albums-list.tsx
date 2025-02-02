import { useUserAlbums } from "@/hooks/use-user-albums";
import { AlbumsListItem } from "../albums-list-item";
import styles from "./albums-list.module.css";

interface AlbumsListProps {
  userId: string;
}

export const AlbumsList = ({ userId }: AlbumsListProps) => {
  const { albums, isLoading } = useUserAlbums(userId);

  return (
    <div className={styles["albums-list__container"]}>
      {albums?.map((album) => (
        <AlbumsListItem key={album.id} album={album} />
      ))}
    </div>
  );
};
