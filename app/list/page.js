import ListItem from "./ListItem";
import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink from "./DetailLink";

export const dynamic = 'force-dynamic'

export default async function List() {
  let db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();


  return (
    <div className="list-bg">
        <ListItem result={result}></ListItem>
    </div>
  )
}