import Link from "next/link";
import { useParams } from "next/navigation";
import { useUserAlbums } from "@/hooks/use-user-albums";
import { AlbumsListItem } from "../albums-list-item";
import { Loader2 } from "lucide-react";
import styles from "./albums-list.module.css";

export function AlbumsList() {
  const { userId } = useParams();
  const { albums, isLoading } = useUserAlbums(userId as string);

  if (isLoading) {
    return (
      <div className={styles["albums-list__loading"]}>
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className={styles["albums-list__container"]}>
      <div className={styles["albums-list__content"]}>
        {albums?.map((album) => (
          <Link href={`/user/${userId}/albums/${album.id}`} key={album.id}>
            <AlbumsListItem album={album} />
          </Link>
        ))}
      </div>
    </div>
  );
}
