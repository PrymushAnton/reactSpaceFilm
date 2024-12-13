import { CarouselCelebrities } from "../CarouselCelebrities/CarouselCelebrities";
// import { ComingSoonSlider } from "../ComingSoonSlider/ComingSoonSlider";
import { ComingSoonSliderNew } from "../ComingSoonSliderNew/ComingSoonSliderNew";
import { NowInTheatersCarousel } from "../NowInTheatersComponent/NowInTheatersCarousel"
import { RecentNewsSlider } from "../RecentNewsSlider/RecentNewsSlider"
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { FilterFilms } from "../FilterFilms/FilterFilms";


import "./Main.css";



export function Main() {
    return (
        <div>
            <main>
                <Header></Header>
                {/* <ComingSoonSlider></ComingSoonSlider> */}
                <ComingSoonSliderNew></ComingSoonSliderNew>
                <NowInTheatersCarousel></NowInTheatersCarousel>
                <CarouselCelebrities></CarouselCelebrities>
                <RecentNewsSlider></RecentNewsSlider>
                {/* <FilterFilms></FilterFilms> */}
                {/* <ComingSoonCarousel></ComingSoonCarousel> */}
                <Footer></Footer>
            </main>
            
        </div>
    )
};