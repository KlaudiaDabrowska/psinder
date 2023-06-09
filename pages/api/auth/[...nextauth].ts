import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/api/loginUser";
import jwt_decode from "jwt-decode";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const userLoginData = {
          email: credentials?.email,
          password: credentials?.password,
        };

        try {
          const loginResponse = await loginUser(userLoginData as any);

          if (loginResponse) {
            const decodedJwt = jwt_decode(loginResponse.token);
            return {
              email: decodedJwt!.email,
            } as AdapterUser;
          } else {
            throw new Error(
              "The login details you provided are incorrect, or you haven't confirmed your email yet. Please verify your credentials and ensure that you have checked your email inbox, including the SPAM folder."
            );
          }
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 24 * 30 * 60,
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 24 * 30 * 60,
  },
  callbacks: {
    session: async ({ session, user, token }) => {
      console.log("USER");
      console.log(user);
      console.log("token");
      console.log(token);
      console.log("session");
      console.log(session);
      return session;
    },
  },
  pages: { signIn: `/login` },
};

export default NextAuth(authOptions);
