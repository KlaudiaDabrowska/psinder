import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    accessToken: string;
    city: string;
  }
  interface Session {
    user: {
      accessToken: string;
      city: string;
    } & DefaultSession["user"];
  }
}
