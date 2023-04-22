
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)


// ****BACKDATED SYSTEM NOW NOT WORKING

// import NextAuth from "next-auth"
// import Providers from "next-auth/providers"

// export default NextAuth({
//   providers:[
//     Providers.github({
//       clientId:process.env.GITHUB_ID,
//       clientSecret:process.env.GITHUB_SECRET,
//     })
//   ]
// })