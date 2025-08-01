import { PUBLIC_PAGES } from "@/config/public-pages.config";
import { getTokensFromRequest } from "@/utils/get-tokens-from-request";
import { jwtVerified } from "@/utils/jwt-verified";
import { nextRedirect } from "@/utils/next-redirect";
import { NextRequest, NextResponse } from "next/server";

export async function AuthPageMiddleware(req: NextRequest) {
  const tokens = await getTokensFromRequest(req);

  if (!tokens) return NextResponse.next();

  const isVerified = await jwtVerified(tokens.accessToken);

  if (!isVerified) return NextResponse.next();

  return nextRedirect(PUBLIC_PAGES.HOME, req.url);
}
