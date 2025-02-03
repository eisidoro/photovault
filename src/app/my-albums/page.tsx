import { AuthGuard } from "@/components/common/auth-guard";
import { HydrateClient, trpc } from "@/trpc/server";
import { MyAlbums } from "@/sections/my-albums";

export default function MyAlbum() {
  void trpc.albums.getAlbums.prefetch();

  return (
    <HydrateClient>
      <AuthGuard>
        <MyAlbums />
      </AuthGuard>
    </HydrateClient>
  );
}
