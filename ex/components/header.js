import Link from "next/link"
import DarkModeToggleBtn from './dark-mode-toggle-button'
import HeadAnimation from '../components/Home/headAnimation'

export default function Header(){
    return ( 
    <>
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <HeadAnimation className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"></HeadAnimation>
            <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">지우석 포트폴리오
            </span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            </Link>
            <Link href="/aboutme" className="mr-5 hover:text-gray-900">
                자기소개
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