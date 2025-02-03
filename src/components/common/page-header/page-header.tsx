import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./page-header.module.css";

interface PageHeaderProps {
  title: string;
  backButton?: boolean;
}

export function PageHeader({ title, backButton = false }: PageHeaderProps) {
  const router = useRouter();
  return (
    <div className={styles["page-header__container"]}>
      {backButton && (
        <Button
          variant="outline"
          size="icon"
          className={styles["page-header__back-button"]}
          onClick={() => router.back()}
        >
          <ArrowLeft />
        </Button>
      )}
      <div className={styles["page-header__title-container"]}>
        <h1 className={styles["page-header__title"]}>{title}</h1>
      </div>
    </div>
  );
}
