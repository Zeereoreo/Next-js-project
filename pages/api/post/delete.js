import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(res, req){
    if (res.method === 'DELETE'){
        let db = (await connectDB).db('forum')
        let result = db.collection('post').deleteOne({_id : new ObjectId(res.body._id)})
    }
}