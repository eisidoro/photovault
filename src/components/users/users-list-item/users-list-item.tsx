import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/user";
import styles from "./users-list-item.module.css";

interface UsersListItemProps {
  user: User;
}

export const UsersListItem = ({ user }: UsersListItemProps) => {
  const userAbbreviation = user.name
    ?.match(/(\b\S)?/g)
    ?.join("")
    ?.match(/(^\S|\S$)?/g)
    ?.join("")
    ?.toUpperCase();

  return (
    <Card className={styles["users-list-item__container"]}>
      <CardHeader className="p-4">
        <CardTitle className="flex items-center gap-2">
          <Avatar className={styles["users-list-item__avatar"]}>
            <AvatarImage src="" />
            <AvatarFallback>{userAbbreviation}</AvatarFallback>
          </Avatar>
          {user.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>E-mail: {user.email.toLowerCase()}</p>
        <p>Address: {user.address.city}</p>
        <p>Phone: {user.phone}</p>
      </CardContent>
    </Card>
  );
};
