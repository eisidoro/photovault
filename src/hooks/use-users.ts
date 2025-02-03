"use client";

import { trpc } from "@/trpc/client";

interface UseUsersProps {
  userId?: string;
}

export const useUsers = ({ userId }: UseUsersProps = {}) => {
  const { data, isLoading } = trpc.user.getUsers.useQuery();

  let currentUser = null;

  if (userId) {
    currentUser = data?.find((user) => user.id === Number(userId));
  }

  return {
    users: data ?? [],
    currentUser,
    isLoading,
  };
};
