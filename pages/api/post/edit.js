import { connectDB } from "@/util/database"


export default async function handler(res, req){
    if (res.method == 'POST'){
        let data = {title : res.body.title, content : res.body.content}
        if (res.body.title == '') {
          return req.status(500).json('제목써라')
        }
        let db = (await connectDB).db('forum')
          let result = await db.collection('post').updateOne(
            {_id : new Object(res.body._id) }, { $set : data }
          )
          req.redirect(302, '/list')
          console.log(result)
      }
}