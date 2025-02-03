import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import styles from "./header.module.css";
import { Button } from "../ui/button";
import { createClient } from "@/utils/supabase/server";

export async function Header() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  return (
    <header className={styles["header__container"]}>
      <SidebarTrigger />
      <div className={styles["header__left"]}>
        <h1 className={styles["header__title"]}>PhotoVault</h1>
      </div>
      <div className={styles["header__right"]}>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div>{data?.user?.email}</div>
            <Button variant="outline">Logout</Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
