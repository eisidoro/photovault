import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { HeaderPopover } from "./header-popover";
import styles from "./header.module.css";

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
        {data?.user?.email ? (
          <HeaderPopover email={data?.user?.email ?? ""} />
        ) : (
          <Link href="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </header>
  );
}
