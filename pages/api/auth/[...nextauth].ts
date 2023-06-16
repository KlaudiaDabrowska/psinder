import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginRequest, loginUser } from "@/api/loginUser";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
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
        } as LoginRequest;

        try {
          const loginResponse = await loginUser(userLoginData);

          if (loginResponse) {
            return {
              id: loginResponse.id,
              email: loginResponse.email,
              name: loginResponse.name,
              city: loginResponse.city,
              accessToken: loginResponse.token,
            };
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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.city = user.city;
        token.accessToken = user.accessToken;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.email = token.email;
        session.user.name = token.name;
        session.user.accessToken = token.accessToken;
        session.user.city = token.city;
      }
      return session;
    },
  },
  pages: { signIn: `/login` },
};

export default NextAuth(authOptions);
