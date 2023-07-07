'use client'

import { useEffect } from "react"
import Link from "next/link"

export default function ListItem ({result}){

    // useEffect(()=>{
    //     //서버에 부탁해서 DB게시물 가져옴
    //     // result = DB게시물
    // },[])
    //단점 : 검색노출 어려움 -> useEffect 실행이 제일 마지막이라
    return (
        <div>
            {result.map((el,idx)=>{
            return(
                <div className="list-item" key={idx}>
                    <Link prefetch={false} href={`/detail/${el._id}`}>
                        <h4>{el.title}</h4>
                    </Link>
                    <Link href={`/edit/${el._id}`}>수정</Link>
                    <p>{el.content}</p>
                    <span onClick={()=>{
                        fetch('/api/post/delete', {method : 'DELETE', body : el._id})
                    }}>삭제</span>
                </div>
                )
        })}
        </div>
    )

}