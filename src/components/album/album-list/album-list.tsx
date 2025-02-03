import { useParams } from "next/navigation";
import { useAlbum } from "@/hooks/use-album";
import { useUserAlbums } from "@/hooks/use-user-albums";

import { Photo as PhotoType } from "@/types/photo";
import { Photo } from "@/components/photo";
import { Loader2 } from "lucide-react";
import styles from "./album-list.module.css";

export function AlbumList() {
  const { userId, albumId } = useParams();
  const { photos, isLoading } = useAlbum(albumId as string);
  const { isLoading: isLoadingAlbums } = useUserAlbums(userId as string);

  if (isLoading || isLoadingAlbums) {
    return (
      <div className={styles["album__loading"]}>
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className={styles["album__container"]}>
      <div className={styles["album__content"]}>
        {photos?.map((photo: PhotoType) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}
