import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { createClient } from "@/utils/supabase/server";

export const albumRouter = createTRPCRouter({
  getAlbums: baseProcedure.query(async () => {
    const supabase = await createClient();
    const { data: user, error: userError } = await supabase.auth.getUser();

    if (userError) {
      return { albums: [], userId: null };
    }

    const { data, error } = await supabase
      .from("albums")
      .select("*")
      .eq("userId", user.user?.id);

    if (error) {
      return { albums: [], userId: null };
    }

    return {
      albums: data,
      userId: user.user?.id,
    };
  }),
});
