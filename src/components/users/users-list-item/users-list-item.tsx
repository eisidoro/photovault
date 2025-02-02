import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { User } from "@/types/user";

interface UsersListItemProps {
  user: User;
}

export const UsersListItem = ({ user }: UsersListItemProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{user.address.city}</p>
      </CardContent>
      <CardFooter>
        <p>{user.phone}</p>
      </CardFooter>
    </Card>
  );
};
