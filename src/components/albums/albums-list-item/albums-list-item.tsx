import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Album } from "@/types/album";

interface AlbumsListItemProps {
  album: Album;
}

export const AlbumsListItem = ({ album }: AlbumsListItemProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{album.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{album.title}</p>
      </CardContent>
      <CardFooter>
        <p>{album.title}</p>
      </CardFooter>
    </Card>
  );
};
