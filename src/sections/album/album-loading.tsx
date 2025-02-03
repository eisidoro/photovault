import { Skeleton } from "@/components/ui/skeleton";
import styles from "./album.module.css";

export const AlbumLoading = () => {
  return (
    <div className={styles["album__container"]}>
      <Skeleton className="h-72 w-72 bg-slate-700" />
    </div>
  );
};
