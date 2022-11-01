import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import connectMongo from '../../../lib/dbConnect';
import GithubProvider from "next-auth/providers/github"
import CredentialProvider from "next-auth/providers/credentials"
import { compare } from 'bcryptjs';
import Users from "../../../models/Users";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),


  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),


    CredentialProvider({

      name: "Credentials",
      credentials: {
        email: { label: "Email Address", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        await connectMongo();
        let user = await Users.findOne({ email: credentials.email });
        if (!user) {
          throw new Error('No user found')
        }

        const checkPassword = await compare(credentials.password, user.password)

        if (!checkPassword) {
          throw new Error('Password is incorrect')
        }

        return user
      },
    })
  ],
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // if(account)
      //   user = account
      return true
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    // async session({ session, token, user }) {
    //   // session.accessToken = token.accessToken
    //   // session.user.id = token.id
    //   // return session
    //   session.user = user.user;
    //   return Promise.resolve(session)
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   // if (account) {
    //   //   token.accessToken = account.access_token
    //   //   if (profile)
    //   //     token.id = profile.id
    //   //   else
    //   //     token.id = user.id
    //   // }
    //   // return token
    //   user && (token.user = user);
    //   return Promise.resolve(token)
    // }
    jwt: async ({ token, user, account }) => {
      // if (account) {
      //   console.log("accc", account.profile);
      //   console.log("use", user);
      //   token.user = account
      //   return token
      // }
      console.log(user);
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    }
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "#009B9A", // Hex color code
    logo: "/img/Planit.svg", // Absolute URL to image
    buttonText: "#009B9A" // Hex color code
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata)
    },
    warn(code) {
      console.warn(code)
    },
    debug(code, metadata) {
      console.debug(code, metadata)
    }
  },
})
// export default NextAuth({
//   adapter: MongoDBAdapter(clientPromise)
// })
