import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
//import { prisma } from "@/prisma"
 
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // ...add more providers here
    ],
    pages: {
        signIn: '/sign',
        signOut: '/sign',
        error: '/sign', // Error code passed in query string as ?error=
        verifyRequest: '/sign', // (used for check email message)
        newUser: null // Will disable the new account creation screen, you can override it if you want
    },
}
export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);