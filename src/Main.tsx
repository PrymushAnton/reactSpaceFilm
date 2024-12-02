import { CarouselCelebrities } from "./CarouselCelebrities";
import { ComingSoonSlider } from "./ComingSoonSlider";
import { NowInTheatersCarousel } from "./NowInTheatersCarousel"
import { RecentNewsSlider } from "./RecentNewsSlider";
import { Footer } from "./Footer";
import { Header } from "./Header";

import { ComingSoonCarousel } from "./ComingSoonCarousel";

import "./static/css/Main.css";


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