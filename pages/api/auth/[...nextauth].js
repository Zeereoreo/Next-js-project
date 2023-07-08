import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '999c4432bb02ef7f57ac',
      clientSecret: 'e00d2c781010348e024e7f947832b9908b594c60',
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 