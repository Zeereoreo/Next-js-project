import Animation from '@/components/Home/animation'
import Link from 'next/link'

export default function Hero(){
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요 지우석입니다.
            <br className="hidden lg:inline-block"/>오늘도 화이팅
                </h1>
                <p className="mb-8 leading-relaxed">청춘의 이것을 기쁘며, 심장은 트고, 봄바람이다. 산야에 오아이스도 원대하고, 용감하고 칼이다. 그들은 없으면, 옷을 못할 가진 봄바람이다. 가슴이 소리다.이것은 바로 말이다. 오아이스도 찾아다녀도, 아니한 그들은 있다. 심장의 심장은 천지는 얼음이 피가 천자만홍이 그들은 피는 얼음에 아니다. 풍부하게 싹이 반짝이는 창공에 소담스러운 것이다. 얼음에 속잎나고, 이상은 실로 갑 있다. 같이 주는 열매를 황금시대의 착목한는 구하기 이것을 같이, 되는 아름다우냐?</p>
                <div className="flex justify-center">
                <Link href='/projects' className="btn-project">프로젝트 보러가기</Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Animation></Animation>
            </div>
        </>
    )
    
}