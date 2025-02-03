"use client";

import { UsersList } from "@/components/users/users-list";
import { PageHeader } from "@/components/common/page-header";

export function Users() {
  return (
    <>
      <PageHeader title="Users" />
      <UsersList />
    </>
  );
}
