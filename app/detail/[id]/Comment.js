'use client'
import { useEffect, useState } from "react"

export default function Comment(props) {
  let [comment, setComment] = useState('')
  let [data, setData] = useState([])

  useEffect(()=>{ //쓸데없는 코드 보관함, 보통 ajax, 타이머 등 넣음
    // 특징1. html로드 / 재렌더링 될 때 마다 실행
    // 특징2. html 보여준 후에 늦게 실행
    fetch(`/api/comment/list?id=${props._id}`).then(r=>r.json())
    //'/api/comment/list?id=' + props._id
    .then((result)=>{
      setData(result)
    })
  },[])

  return (
      <div>
        <div>댓글목록</div>
        {
        data.length > 0?
        data.map((a,i)=>
            <p key={i}>{a.content}</p>
        )
        : '댓글 없음'
        }
        <input onChange={(e)=>{ setComment(e.target.value) }} />
        <button onClick={()=>{ fetch('/api/commnet/new', { method : 'POST', 
        body : JSON.stringify({comment:comment, _id: props._id})
        } ) }}>댓글전송</button>
      </div>
  )
} 