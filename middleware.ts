import { NextResponse, type NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/search/results")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/search")) {
    const url = new URL("/search/results", req.url);
    url.search = req.nextUrl.search;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

