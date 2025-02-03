import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { env } from "@/config/env";
import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { Album } from "@/types/album";
import { User } from "@/types/user";
import { Photo } from "@/types/photo";

export const userRouter = createTRPCRouter({
  getUsers: baseProcedure.query(async () => {
    try {
      const response = await fetch(`${env.NEXT_PUBLIC_BASE_API_URL}/users`);
      const data = await response.json();
      return data as User[];
    } catch (error) {
      console.error("TRPC: Failed to fetch users", error);

      if (error instanceof TRPCError) {
        throw error;
      }
    }
  }),

  getUserAlbums: baseProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await fetch(
          `${env.NEXT_PUBLIC_BASE_API_URL}/users/${input.userId}/albums`
        );
        const data = await response.json();
        return data as Album[];
      } catch (error) {
        console.error("TRPC: Failed to fetch users", error);
        if (error instanceof TRPCError) {
          throw error;
        }
      }
    }),

  getAlbumPhotos: baseProcedure
    .input(z.object({ albumId: z.string() }))
    .query(async ({ input }) => {
      try {
        const response = await fetch(
          `${env.NEXT_PUBLIC_BASE_API_URL}/albums/${input.albumId}/photos`
        );
        const data = await response.json();

        return data.filter(
          (photo: Photo) => photo.albumId === Number(input.albumId)
        );
      } catch (error) {
        console.error("TRPC: Failed to fetch album photos", error);
      }
    }),
});
