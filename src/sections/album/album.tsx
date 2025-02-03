import { useParams } from "next/navigation";
import { Photo } from "@/components/photo";
import { Photo as PhotoType } from "@/types/photo";
import { useAlbum } from "@/hooks/use-album";
import { AlbumLoading } from "./album-loading";
import styles from "./album.module.css";

export const Album = () => {
  const { albumId } = useParams();
  const { photos, isLoading } = useAlbum(albumId as string);

  if (isLoading) {
    return <AlbumLoading />;
  }

  return (
    <div>
      <h1>Album</h1>
      <div className={styles["album__container"]}>
        {photos?.map((photo: PhotoType) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};
