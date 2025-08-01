"use client";

import { PUBLIC_PAGES } from "@/config/public-pages.config";
import { tokenService } from "@/services/token.services";
import { Tokens } from "@/types/token.types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function RedirectPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const accessToken = searchParams.get(Tokens.ACCESS_TOKEN);

    if (accessToken) {
      tokenService.saveToken(accessToken);
      router.replace(PUBLIC_PAGES.HOME);
    }
  }, []);

  return (
    <div>
      <span className="border-b block rounded-full w-10 h-10 animate-spin"></span>
    </div>
  );
}
