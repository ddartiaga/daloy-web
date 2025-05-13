import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/lib/db";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Resend({
      // https://authjs.dev/getting-started/providers/resend
      apiKey: process.env.RESEND_API_KEY,
      from: "no-reply@resend.dev",
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "database", // explicit, since Magic Link needs database to store session and verification token

    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    async signIn({ user }) {
      // called right after the user signs in, can be used to validate signin
      console.log("signIn callback is called.");

      // 👇 custom approval check
      // if (!user.approved) {
      //   return false; // blocks sign-in
      // }

      return true;
    },
    async jwt({ token, user }) {
      // only used when session strategy is 'jwt'
      // called every time jwt is updated

      console.log("jwt callback is called.");
      console.log("token", token);

      return token;
    },
    async session({ session, user }) {
      // called everytime a component asks for session information in a component

      console.log("session callback is called.");
      console.log("session", session);

      // session.user.approved = user.approved;

      return session;
    },
    async redirect({ url, baseUrl }) {
      // called on redirect
      console.log("redirect callback is called.");
      console.log("url", url);
      console.log("baseUrl", baseUrl);

      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
});
