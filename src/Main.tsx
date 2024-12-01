import { CarouselCelebrities } from "./CarouselCelebrities";
import { ComingSoonSlider } from "./ComingSoonSlider";
import { NowInTheatersCarousel } from "./NowInTheatersCarousel"
import { RecentNewsSlider } from "./RecentNewsSlider";
import "./static/css/Main.css";


export function Main() {
    return (
        <div className="Maindiv">
            <ComingSoonSlider></ComingSoonSlider>
            <NowInTheatersCarousel></NowInTheatersCarousel>
            <CarouselCelebrities></CarouselCelebrities>
            <RecentNewsSlider></RecentNewsSlider>
        </div>
    )
  };