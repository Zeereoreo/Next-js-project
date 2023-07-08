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
                    <span onClick={(e)=>{
                        fetch('/api/post/delete', {method : 'DELETE', body : el._id})
                        .then((r)=>r.json())
                        .then(()=>{
                            e.target.parentElement.style.opacity=0
                            setTimeout(()=>{
                                e.target.parentElement.style.display='none'
                            },1000)
                        })
                    }}>삭제</span>
                    
                </div>
                )
        })}
        </div>
    )
//1. query string 사용하기

// fetch(/요청 url ?a=1&b=2&c=3) 
// URL을 작성하면 서버로 {a:1, b:2, c:3} 이런 데이터가 전송

//2. URL parameter 사용하기

// /api/abc/아무문자 경로로 GET, POST 요청 등을 하는 경우 
// [name].js 안의 코드가 실행
}