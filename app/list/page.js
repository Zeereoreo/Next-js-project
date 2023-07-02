import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();


  return (
    <div className="list-bg">
        {result.map((el,idx)=>{
            return(
                <div className="list-item" key={idx}>
                    <Link prefetch={false} href={`/detail/${el._id}`}>
                        <h4>{el.title}</h4>
                    </Link>
                    <DetailLink></DetailLink>
                    <p>{el.content}</p>
                </div>
                )
        })}
    </div>
  )
}