import { Layout } from './Layout/Layout'
import { Header } from './Header/Header'
import { Main } from './Main/Main'
import { Footer } from './Footer/Footer'




export function App(){
    return(
        <div>
            <Layout>
                <Main></Main>
            </Layout>
        </div>
    )
}