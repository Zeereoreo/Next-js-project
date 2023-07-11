import { connectDB } from "@/util/database"
import { getServerSession } from 'next-auth'
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(res, req){
  let session = await getServerSession(res, req, authOptions)
  if(session){
    res.body.author = session.user.email
  }
    if (res.method == 'POST'){
        if (res.body.title == '') {
          return req.status(500).json('제목써라')
        }
        try {
          let db = (await connectDB).db('forum')
          let result = db.collection('post').insertOne(res.body)
          req.redirect(302, '/list')
        } catch (error) {
          alert('에러')
        }
        
      }
}