import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"
import GithubProvider from "next-auth/providers/github"
import CredentialProvider from "next-auth/providers/credentials"
import { compare } from 'bcryptjs';

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
      async authorize(credentials) {
        const users = await clientPromise.db().collection('users');
        const result = await users.findOne({
          email: credentials.email
        })
        
        if(!result){
          throw new Error('No user found')
        }
        
        const checkPassword = await comapre(credentials.password, result.password)
        
        if(!checkPassword){
          throw new Error('Password is incorrect')
        }
        
        return {email: result.email}
      }
    })
  ],
})
// export default NextAuth({
//   adapter: MongoDBAdapter(clientPromise)
// })
