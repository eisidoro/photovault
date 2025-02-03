"use client";

import { AlbumsList } from "@/components/albums/albums-list";
import { PageHeader } from "@/components/common/page-header";
import { useMyAlbums } from "@/hooks/use-my-albums";

export function MyAlbums() {
  const { albums, userId } = useMyAlbums();

  return (
    <div>
      <PageHeader title="My Albums" />
      <AlbumsList
        albums={albums ?? []}
        isLoading={false}
        userId={userId ?? ""}
      />
    </div>
  );
}
