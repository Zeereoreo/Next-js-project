
import Animation from '@/components/Home/animation'
import Link from 'next/link'
import GitHub from './gitHub'

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요.
            <br className="lg:inline-block"/>
            &quot;지우석&quot; 입니다.
            <br className="hidden lg:inline-block"/>
                </h1>
                    <p className="mb-8 leading-relaxed">&quot;조금만 더&quot; 란  생각으로 멈추지 않고
                    <br className="lg:inline-block"/>
                    &quot;다른 방법은?&quot; 이란 생각을 하길 좋아하며,
                    <br className="lg:inline-block"/>
                    &quot;재밌게&quot; 란 생각으로 행동합니다.</p>
                <div className="flex justify-center">
                <Link href='/projects' className="btn-project">프로젝트 보러가기</Link>
                </div>
                <div className="flex justify-center mt-5">
                <Link href='/aboutme' className="btn-project">자기소개 보러가기</Link>
                </div>
            </div>
            
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation></Animation>
            </div>
        </>
    )
    
}