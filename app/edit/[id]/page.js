import { connectDB } from "@/util/database.js"
import { ObjectId } from "mongodb";

export default async function Edit (props){
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)})
 

    return (
        <div className="p-20">
            <h4>글 수정</h4>
            <form action="/api/post/edit" method="POST">
                <input name="title" placeholder="제목" defaultValue={result.title}></input>
                <input name="content" placeholder="내용" defaultValue={result.content}></input>
                <input style={{display:'none'}} name="content" placeholder="내용" defaultValue={result._id.toString()}></input>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}