"use client";

import Link from "next/link";
import { useUsers } from "@/hooks/use-users";
import { UsersListItem } from "../users-list-item";
import { Loader2 } from "lucide-react";
import styles from "./users-list.module.css";

export const UsersList = () => {
  const { users, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div className={styles["users-list__loading"]}>
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className={styles["users-list__container"]}>
      <div className={styles["users-list__content"]}>
        {users.map((user) => (
          <Link href={`/user/${user.id}/albums`} key={user.id}>
            <UsersListItem user={user} />
          </Link>
        ))}
      </div>
    </div>
  );
};
