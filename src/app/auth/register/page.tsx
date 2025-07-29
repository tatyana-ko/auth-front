import type { Metadata } from "next";

import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { AuthForm } from "../AuthForm";

export const metadata: Metadata = {
  title: "User registration page",
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div>
      <AuthForm title="Register" isLoginForm={false} />
    </div>
  );
}
