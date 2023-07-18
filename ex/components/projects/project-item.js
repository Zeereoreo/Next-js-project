import Link from "next/link"
import Image from "next/legacy/image"

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    const githubLink = data.properties.Github.url
    const Description = data.properties.Description.rich_text[0].plain_text
    const Img = data.cover.external.url

    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-xl w-full">
            <Image 
                className="rounded-t-xl"
                src={Img} 
                alt="커버 이미지"
                width='100%'
                height='60%'
                layout="responsive"
                objectFit="none"
            />

            <div className="p-4 flex flex-col">
            <h1>{title}</h1>
            <h3>{Description}</h3>
            <Link href={githubLink}>Github</Link>
            </div>
        </div>
    )
}