import { getServerSession } from 'next-auth';


export default async function Write(){

    let session = await getServerSession(authOptions)
    if(session === undefined){
        return <div>로그인하세요</div>
    }

    return (
        <div className="p-20">
            <h4>글 작성</h4>
            <form action="/api/post/new" method="POST">
                <input name="title" placeholder="제목"></input>
                <input name="content" placeholder="내용"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}