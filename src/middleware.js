// middleware.js
import UAParser from "ua-parser-js";
import { NextResponse } from "next/server";

export function middleware(request) {
  const uaString = request.headers.get("user-agent") || "";
  const parser = new UAParser(uaString);
  const ua = parser.getResult();
  const response = NextResponse.next();

  const isMobile = ua.device.type === "mobile" || ua.device.type === "tablet";
  const viewport = isMobile ? "mobile" : "desktop";

  const host = request.nextUrl.hostname;
  console.log(host, "hosturl");
  if (host === "https://pullys.vercel.app/") {
    response.headers.set("hostname", host);
    response.headers.set("x-host", "true");
  }

  response.headers.set("x-viewport", viewport);

  return response;
}
