import "./MainList.css"

import { CarouselCelebrities } from "../CarouselCelebrities/CarouselCelebrities";
import { ComingSoonSliderNew } from "../ComingSoonSliderNew/ComingSoonSliderNew";
import { NowInTheatersCarousel } from "../NowInTheatersComponent/NowInTheatersCarousel"
import { RecentNewsSlider } from "../RecentNewsSlider/RecentNewsSlider"

export function MainList(){


    return (
        <div id="MainList">
            <ComingSoonSliderNew></ComingSoonSliderNew>
            <NowInTheatersCarousel></NowInTheatersCarousel>
            <CarouselCelebrities></CarouselCelebrities>
            <RecentNewsSlider></RecentNewsSlider>
        </div>
    )
}