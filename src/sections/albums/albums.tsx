"use client";

import { useParams } from "next/navigation";
import { AlbumsList } from "@/components/albums/albums-list";

export const Albums = () => {
  const { userId } = useParams();

  return <AlbumsList userId={userId as string} />;
};
