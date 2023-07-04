import { connectDB } from "@/util/database"


export default async function handler(res, req){
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