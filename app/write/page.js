export default function Write(){
    return (
        <div>
            <h4>글 작성</h4>
            <form action="/api/test" method="POST">
                <input name="title" placeholder="제목"></input>
                <input name="title" placeholder="내용"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}