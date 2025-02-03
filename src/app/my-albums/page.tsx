import { AuthGuard } from "@/components/common/auth-guard";

export default function MyAlbum() {
  return (
    <AuthGuard>
      <div>My Album</div>
    </AuthGuard>
  );
}
