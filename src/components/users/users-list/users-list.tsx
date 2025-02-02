"use client";

import { useUsers } from "@/hooks/use-users";
import { UsersListItem } from "../users-list-item/users-list-item";
import styles from "./users-list.module.css";

export const UsersList = () => {
  const { users } = useUsers();

  return (
    <div className={styles["users-list__container"]}>
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </div>
  );
};
