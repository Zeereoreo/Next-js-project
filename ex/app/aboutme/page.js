import Layout from "@/components/layout";
import Head from "next/head";

export default function AboutMe(){
    return (
        <Layout>
        <Head>
        <title>포트폴리오</title>
        <meta name='description' content='오늘도 화이팅'/>
        <link rel='icon' href='/favicon.ico'/>
        </Head>
            <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">&quot;서비스&quot;의 본질을 잘 알고 있습니다.
                <br className="hidden lg:inline-block"/>
            </h1>
                    <p className="mb-8 leading-relaxed">서비스업 경력이 많은만큼 그 간의 경험들로 고객들의 니즈를 잘 파악할 줄 압니다.
                    <br className="lg:inline-block"/>
                    프론트엔드의 일도 마찬가지로 &quot;서비스&quot; 라고 생각합니다.
                    <br className="lg:inline-block"/>
                    원하는 것이 무엇인지, 불편한 것이 무엇인지, 결국엔 사용자의 마음을 파악할 줄 알아야 한다고 생각합니다.
                    </p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Data를 기반으로 감이 아닌 정보를 바탕으로 행동합니다.
                <br className="hidden lg:inline-block"/>
                </h1>
                    <p className="mb-8 leading-relaxed">
                        단순히 감이 아닌 Data로 일을 해왔습니다.
                    <br className="lg:inline-block"/>
                        
                    <br className="lg:inline-block"/>
                    원하는 것이 무엇인지, 불편한 것이 무엇인지, 결국엔 사용자의 마음을 파악할 줄 알아야 한다고 생각합니다.
                    </p>
        </section>
        </Layout>
    )
}