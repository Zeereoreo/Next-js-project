import { connectDB } from "@/util/database.js"
import Link from "next/link";

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result[0]._id)

  return (
    <div className="list-bg">
        {result.map((el,idx)=>{
            return(
                <div className="list-item" key={idx}>
                    <h4>{el.title}</h4>
                    <p>{el.content}</p>
                    <Link href={`/detail/${el._id}`}>상세페이지</Link>
                </div>
                )
        })}
    </div>
  )
}