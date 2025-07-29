import { AuthForm } from "@/app/auth/AuthForm";
import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login page",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div>
      <AuthForm title="Login" isLoginForm/>
    </div>
  );
}
