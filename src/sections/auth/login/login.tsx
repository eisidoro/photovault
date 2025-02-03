import { LoginForm } from "@/components/auth/login-form/login-form";
import styles from "./login.module.css";

export function Login() {
  return (
    <div className={styles["login__container"]}>
      <LoginForm />
    </div>
  );
}
