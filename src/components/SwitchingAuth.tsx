import { PUBLIC_PAGES } from "@/config/public-pages.config";
import Link from "next/link";

interface Props {
  isLoginForm: boolean;
}

export function SwitchingAuth({ isLoginForm }: Props) {
  return (
    <p>
      {isLoginForm
        ? "Don't have an account yet? "
        : "Already have an account? "}
      {isLoginForm ? (
        <Link href={PUBLIC_PAGES.REGISTER} className="text-blue-900">
          sign up
        </Link>
      ) : (
        <Link href={PUBLIC_PAGES.LOGIN} className="text-blue-900">
          sign in
        </Link>
      )}
    </p>
  );
}
