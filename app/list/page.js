import { connectDB } from "@/util/database.js"

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
        {result.map((el,idx)=>{
            return(
                <div className="list-item" key={idx}>
                    <h4>{el.title}</h4>
                    <p>{el.content}</p>
                </div>
                )
        })}
    </div>
  )
}