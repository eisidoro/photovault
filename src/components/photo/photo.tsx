import { useState } from "react";
import Image from "next/image";
import { Photo as PhotoType } from "@/types/photo";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Card } from "../ui/card";
import styles from "./photo.module.css";

export const Photo = ({ photo }: { photo: PhotoType }) => {
  return (
    <Card className={styles["photo__container"]}>
      <CardContent className={styles["photo__content"]}>
        <Image
          loading="lazy"
          src={"https://dummyimage.com/300"}
          alt={photo.title}
          width={100}
          height={100}
          onError={(ev) => {
            ev.currentTarget.onerror = null;
            ev.currentTarget.src = "https://dummyimage.com/300";
          }}
        />
      </CardContent>
      <CardHeader className={styles["photo__header"]}>
        <CardTitle className={styles["photo__title"]}>{photo.title}</CardTitle>
      </CardHeader>
    </Card>
  );
};
