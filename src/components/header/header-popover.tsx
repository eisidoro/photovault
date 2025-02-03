import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function HeaderPopover({ email }: { email: string }) {
  const userAbbreviation = email?.split("@")[0]?.slice(0, 2);

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>{userAbbreviation}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div>{userAbbreviation}</div>
        <Button variant="outline">Logout</Button>
      </PopoverContent>
    </Popover>
  );
}
