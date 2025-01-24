import { CarouselCelebrities } from "../../shared/CarouselCelebrities/CarouselCelebrities"
import { ComingSoonSliderNew } from "../../shared/ComingSoonSliderNew/ComingSoonSliderNew"
import { NowInTheatersCarousel } from "../../shared/NowInTheatersComponent/NowInTheatersCarousel"
import { RecentNewsSlider } from "../../shared/RecentNewsSlider/RecentNewsSlider"
import "./MainList.css"



export function MainList(){


    return (
        <div id="MainList">
            <ComingSoonSliderNew></ComingSoonSliderNew>
            <NowInTheatersCarousel span={5}></NowInTheatersCarousel>
            <CarouselCelebrities></CarouselCelebrities>
            <RecentNewsSlider></RecentNewsSlider>
        </div>
    )
}