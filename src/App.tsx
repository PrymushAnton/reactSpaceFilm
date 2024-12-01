import { Layout } from './Layout'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

import { CarouselCelebrities } from './CarouselCelebrities'
import { RecentNewsSlider } from './RecentNews'


export function App(){
    return(
        <div>
            <Layout>
                <Header></Header>
                <Main></Main>

                <CarouselCelebrities></CarouselCelebrities>
                <RecentNewsSlider></RecentNewsSlider>

                {/* <Footer></Footer> */}
            </Layout>
        </div>
    )
}