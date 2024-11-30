import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const password = process.env.PASSWORD_PROTECT; // The hardcoded password
  const userPassword = req.cookies.get("user-password")?.value; // Get the user-password cookie

  // If the user is on the password page, we do not want to redirect them again
  if (req.nextUrl.pathname === process.env.AUTH_ROUTE) {
    return NextResponse.next(); // Allow access to the password page
  }

  // If the user has the correct password, allow them to continue
  if (userPassword === password) {
    return NextResponse.next(); // Allow access to the protected pages
  }

  // Otherwise, redirect them to the password page
  const url = req.nextUrl.clone();
  url.pathname = "/auth"; // Redirect to the password page
  return NextResponse.redirect(url);
}

// Apply this middleware to all routes except for static files and the password page
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico|password).*)", // Exclude specific paths
};
