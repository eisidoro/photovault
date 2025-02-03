import { useMemo } from "react";
import { useParams } from "next/navigation";
import { useAlbum } from "@/hooks/use-album";
import { useUserAlbums } from "@/hooks/use-user-albums";
import { Photo as PhotoType } from "@/types/photo";
import { Photo } from "@/components/photo";
import { AlbumLoading } from "./album-loading";
import styles from "./album.module.css";

export const Album = () => {
  const { userId, albumId } = useParams();
  const { photos, isLoading } = useAlbum(albumId as string);
  const { albums, isLoading: isLoadingAlbums } = useUserAlbums(
    userId as string
  );

  const currentAlbumTitle = useMemo(() => {
    const album = albums?.find((album) => album.id === Number(albumId));
    return album?.title;
  }, [albums, albumId]);

  if (isLoading || isLoadingAlbums) {
    return <AlbumLoading />;
  }

  return (
    <div>
      <h1 className={styles["album__title-container"]}>
        <span className={styles["album__title-prefix"]}>Album </span>
        <span> &gt; </span>
        <span className={styles["album__title"]}> {currentAlbumTitle}</span>
      </h1>
      <div className={styles["album__container"]}>
        {photos?.map((photo: PhotoType) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};
