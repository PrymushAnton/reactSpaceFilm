import { Layout } from './Layout'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

import { CarouselCelebrities } from './CarouselCelebrities'
import { RecentNewsSlider } from './RecentNewsSlider'
import { ComingSoonCarousel } from './ComingSoonCarousel'


export function App(){
    return(
        <div>
            <Layout>
                <Main></Main>
            </Layout>
        </div>
    )
}