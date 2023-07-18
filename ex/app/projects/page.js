import Layout from "@/components/layout"
import Head from "next/head"
import { TOKEN,DATABASE_ID } from "@/config";
import ProjectItem from '@/components/projects/project-item'

export default async function Projects(){
    const projects = await StaticData()

    return(
        <Layout>
            <div className='flex flex-col items-conter justify-center min-h-screen px-5 mb-10'>
            <Head>
                <title>포트폴리오</title>
                <meta name='description' content='오늘도 화이팅'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <h1 className="text-4xl font-bold sm:text-6xl">
                총 프로젝트 : 
                <span className="pl-4 text-blue-500">{projects.results.length}</span>
                </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
            {projects.results.map((aProject)=>(
                <ProjectItem data={aProject} key={aProject.id}></ProjectItem>
                ))}
            </div>
            {/* <StaticData></StaticData> */}
            </div>

        </Layout>
    )
}

export async function StaticData(){
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
            },
            body: JSON.stringify({
                sorts: [
                    {
                        "property": "Name",
                        "direction": "ascending",
                    }
                ]
            })
        };
        
        const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

        const data = await res.json()


        // const projectNames = projects.results.map((aProject) => {
        //     return aProject.properties.Name.title[0].plain_text
        // });
        // console.log(projects)

        return data
        




        // console.log(`projectIds : ${projectIds}`)
        
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
    }