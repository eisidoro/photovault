"use client";

import { trpc } from "@/trpc/client";

export const useUsers = () => {
  const { data, isLoading } = trpc.user.getUsers.useQuery(undefined, {});

  return {
    users: data ?? [],
    isLoading,
  };
};
