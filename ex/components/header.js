import Link from "next/link"
import DarkModeToggleBtn from './dark-mode-toggle-button'
import HeadAnimation from '../components/Home/headAnimation'

export default function Header(){
    return ( 
    <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <HeadAnimation className="w-full h-full"></HeadAnimation>
            <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">지우석 포트폴리오
            </span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
                홈
            </Link>
            <Link href="/projects" className="mr-5 hover:text-gray-900">
                프로젝트
            </Link>
            <Link href='https://zeereo.tistory.com/' className="mr-5 hover:text-gray-900">블로그</Link>
            <Link href='https://github.com/Zeereoreo' className="mr-5 hover:text-gray-900">Github</Link>
            <DarkModeToggleBtn></DarkModeToggleBtn>
            </nav>
            </div>
        </header>
    </>
    )
}