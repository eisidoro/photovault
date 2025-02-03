import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Album } from "@/types/album";
import styles from "./albums-list-item.module.css";

interface AlbumsListItemProps {
  album: Album;
}

export const AlbumsListItem = ({ album }: AlbumsListItemProps) => {
  return (
    <Card className={styles["albums-list-item__container"]}>
      <CardHeader>
        <CardTitle>{album.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{album.title}</p>
      </CardContent>
    </Card>
  );
};
