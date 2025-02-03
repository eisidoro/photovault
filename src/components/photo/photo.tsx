import { Photo as PhotoType } from "@/types/photo";
import Image from "next/image";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Card } from "../ui/card";
import styles from "./photo.module.css";
export const Photo = ({ photo }: { photo: PhotoType }) => {
  return (
    <Card className={styles["photo__container"]}>
      <CardContent>
        <Image src={photo.url} alt={photo.title} width={100} height={100} />
      </CardContent>
      <CardHeader>
        <CardTitle>{photo.title}</CardTitle>
      </CardHeader>
    </Card>
  );
};
