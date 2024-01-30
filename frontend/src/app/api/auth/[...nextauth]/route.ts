import NextAuth, { AuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "553387708630-sa90dvfrrh58moqbo9hu0bcnoget04kd.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      profile: (profile, tokens) => {
        if (profile) {
          const user = {
            id: profile.sub,
            email: profile.email,
            name: profile.name,
            lastName: profile.family_name,
            firstName: profile.given_name,
            image: profile.picture,
            accessToken: tokens.access_token,
            idToken: tokens.id_token,
          };
          // console.log(user);
          return user;
        } else {
          throw new Error("Login Failed");
        }
      },
    }),
    FacebookProvider({
      clientId: "904732047792268",
      clientSecret: "f0d109da523014e2e99b96eb81766ade",
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text" },
    //     password: { label: "Password", type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     if (credentials) {
    //       const res = await fetch("https://dummyjson.com/auth/login", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //           username: credentials.username,
    //           password: credentials.password,
    //           expiresInMins: 60, // optional
    //         }),
    //       }).then((res) => res.json());

    //       if (res?.message) {
    //         throw new Error("Login Failed");
    //       }

    //       if (res) {
    //         return res;
    //       } else {
    //         return null;
    //       }
    //     } else {
    //       return null;
    //     }
    //   },
    // }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token, user }) {
      const sessionInfo = {
        user: {
          id: token.id,
          username: token.username,
          email: token.email,
          name: token.name,
          // name: `${token?.firstName} ${token?.lastName}`,
          image: token.image,
        },
        expires: session.expires,
        accessToken: token.accessToken,
      };

      return sessionInfo as Session;
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
