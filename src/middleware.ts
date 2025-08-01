import { NextRequest, NextResponse } from "next/server";
import { PUBLIC_PAGES } from "./config/public-pages.config";
import { AuthPageMiddleware } from "./middleware/auth-page.middleware";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith(PUBLIC_PAGES.AUTH)) {
    return AuthPageMiddleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*"],
};
