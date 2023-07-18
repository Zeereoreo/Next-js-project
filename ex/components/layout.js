import Header from './header'
import Footer from './footer'
import { Providers } from '../app/providers'



export default function Layout({children}){
    return(
        <div className='bg-primary'>
        <Providers>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </Providers>
        </div>
    )
}