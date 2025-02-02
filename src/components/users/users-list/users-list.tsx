"use client";

import { useUsers } from "@/hooks/use-users";
import { UsersListItem } from "../users-list-item/users-list-item";
import styles from "./users-list.module.css";
import Link from "next/link";

export const UsersList = () => {
  const { users } = useUsers();

  return (
    <div className={styles["users-list__container"]}>
      {users.map((user) => (
        <Link href={`/user/${user.id}/albums`} key={user.id}>
          <UsersListItem user={user} />
        </Link>
      ))}
    </div>
  );
};
