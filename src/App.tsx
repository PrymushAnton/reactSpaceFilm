import { Layout } from './Layout'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export function App(){
    return(
        <div>
            <Layout>
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </Layout>
        </div>
    )
}