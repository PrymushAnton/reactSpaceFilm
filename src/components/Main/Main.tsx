import { CarouselCelebrities } from "../CarouselCelebrities/CarouselCelebrities";
import { ComingSoonSlider } from "../ComingSoonSlider/ComingSoonSlider";
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
                <ComingSoonSlider></ComingSoonSlider>
                <NowInTheatersCarousel></NowInTheatersCarousel>
                <CarouselCelebrities></CarouselCelebrities>
                <RecentNewsSlider></RecentNewsSlider>
                {/* <ComingSoonCarousel></ComingSoonCarousel> */}
                <Footer></Footer>
            </main>
            
        </div>
    )
  };