import { db } from "@/database/db";
import { users } from "@/database/schema";
import { eq } from "drizzle-orm";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                console.log("AAAA");
                if (!credentials?.email || !credentials?.password) {
                  return null;
                }
                console.log("BBB");
                const user = await db
                  .select()
                  .from(users)
                  .where(eq(users.email, credentials.email.toString()))
                  .limit(1);

                if (user.length === 0) return null;

                // const isPasswordValid = await compare(credentials.password.toString(), user[0].password);

                // if (!isPasswordValid) return null;
                console.log("CCC");
return {
  id: user[0].id.toString(),
  email: user[0].email,
  role: user[0].role,
} as User;
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as string,
                token.name = user.name
            }

            return token
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user.id = token.id as string),
                  (session.user.name = token.name as string);
            }

            return session
        }
    }
})