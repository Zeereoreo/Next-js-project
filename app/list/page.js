import ListItem from "./ListItem";
import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink from "./DetailLink";

export const dynamic = 'force-dynamic' // 강제로 다이나믹렌더링 페이지로 변경

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();


  return (
    <div className="list-bg">
        <ListItem result={result}></ListItem>
    </div>
  )
}

export default async function 페이지(){
  let result = await fetch('/api/어쩌구', { cache: 'force-cache' })}

  fetch('/URL', { next: { revalidate: 60 } }) 

  fetch('/URL', { cache: 'no-store' }) 