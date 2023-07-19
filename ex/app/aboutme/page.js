import Layout from "@/components/layout";
import Link from "next/link";
import GitHub from "@/components/Home/gitHub";

export default function AboutMe(){
    return (
        <Layout>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">&quot;서비스&quot;의 본질을 잘 알고 있습니다.
                <br className="hidden lg:inline-block"/>
            </h1>
                    <p className="mb-8 leading-relaxed">서비스업 경력이 많은만큼 그 간의 경험들로 고객들의 니즈를 잘 파악할 줄 압니다.
                    <br className="lg:inline-block"/>
                    프론트엔드의 일도 마찬가지로 &quot;서비스&quot; 라고 생각합니다.
                    <br className="lg:inline-block"/>
                    원하는 것이 무엇인지, 불편한 것이 무엇인지, 결국엔 사용자의 마음을 파악할 줄 알아야 한다고 생각합니다.💛
                    </p>
                <h1 className="title-font sm:text-4xl text-3xl mt-10 mb-4 font-medium text-gray-900">감이 아닌 정보를 바탕으로 행동합니다.
                <br className="hidden lg:inline-block"/>
                </h1>
                    <p className="mb-8 leading-relaxed">
                        단순히 감이 아닌 Data로 일을 해왔습니다.
                    <br className="lg:inline-block"/>
                        매출을 올리기 위해서 매 시즌 니즈를 파악해서 방법을 바꿔 매출을 올리고,
                        <br className="lg:inline-block"/>
                        검색량을 바탕으로 새로운 아이템을 찾고 검증 하였고,                        
                    <br className="lg:inline-block"/>
                        직접 커뮤니케이션을 통해 불만들을 접수해 환경을 바꿨습니다.👍
                    </p>
                    <h1 className="title-font sm:text-4xl text-3xl mt-10 mb-4 font-medium text-gray-900">
                        새로운 것과 배움을 좋아하며, 행동으로 보여줍니다.
                <br className="hidden lg:inline-block"/>
                </h1>
                    <p className="mb-8 leading-relaxed">
                        보다 좋은 질의 서비스를 찾아 개발자의 길에 들어섰습니다.
                    <br className="lg:inline-block"/>
                        더 많은 고객들의 만족을 원하기 때문입니다.
                        <br className="lg:inline-block"/>
                        하나씩 Stack을 쌓아 나갈 때마다 살아있음을 느낍니다.                        
                    <br className="lg:inline-block"/>
                        이 곳 또한, Next.js를 활용하였고, 현재 진행 중인 것은 typescript로 진행하고 있으며 기대해주세요😃
                    </p>
                    <div className="flex justify-center">
                <Link href='/projects' className="btn-project">프로젝트 보러가기</Link>
                </div>
        </section>
        </Layout>
    )
}