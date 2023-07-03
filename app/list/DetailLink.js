'use client'

import { useParams, usePathname, useRouter } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    return (
        <button onClick={()=>{ router.push('/list')}}>버튼</button>
    )
}

function ex(){
return(
    <>
<button onClick={()=>{ router.back() }}>버튼</button> 
// router.back() 실행하면 뒤로가기

<button onClick={()=>{ router.forward() }}>버튼</button> 
// router.forward() 실행하면 앞으로가기

<button onClick={()=>{ router.refresh() }}>버튼</button> 
router.refresh() 실행하면 새로고침


prefetch 기능 


<button onClick={()=>{ router.prefetch('/어쩌구') }}>버튼</button> 
router.prefetch('/어쩌구') 실행하면 '/어쩌구'의 내용을 미리 로드해줍니다. 

그럼 그 페이지 방문할 때 매우 빠르게 방문할 수 있습니다. 

빠른 사이트를 만들고 싶을 때 쓸 수 있는 유용한 기능

<Link href={'/어쩌구'} prefetch={false}>링크</Link> 
자동으로 미리 로드하는게 싫으면 prefetch 속성을 false로 바꿔줍시다. 

링크가 많은 게시판의 경우 모든 링크를 다 읽을게 아닌데 굳이 모든걸 미리 로드하는건 자원낭비

let a = usePathname()
let b = useSearchParams()
let c = useParams()

usePathname() 쓰면 현재 URL 출력 

useSearchParams() 쓰면 search parameter (query string) 출력

useParams() 쓰면 [dynamic route]에 입력한내용 (URL 파라미터) 을 출력

    </>
)

}
