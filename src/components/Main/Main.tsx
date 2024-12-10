import { CarouselCelebrities } from "../CarouselCelebrities/CarouselCelebrities";
import { ComingSoonSliderNew } from "../ComingSoonSliderNew/ComingSoonSliderNew";
import { NowInTheatersCarousel } from "../NowInTheatersComponent/NowInTheatersCarousel"
import { RecentNewsSlider } from "../RecentNewsSlider/RecentNewsSlider"
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";


import "./Main.css";


export function Main() {
    return (
        <div>
            <main>
                <Header></Header>
                <ComingSoonSliderNew></ComingSoonSliderNew>
                <NowInTheatersCarousel></NowInTheatersCarousel>
                <CarouselCelebrities></CarouselCelebrities>
                <RecentNewsSlider></RecentNewsSlider>
                {/* <ComingSoonCarousel></ComingSoonCarousel> */}
                <Footer></Footer>
            </main>
            
        </div>
    )
  };