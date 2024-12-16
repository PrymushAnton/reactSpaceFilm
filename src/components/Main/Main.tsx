import { CarouselCelebrities } from "../CarouselCelebrities/CarouselCelebrities";
// import { ComingSoonSlider } from "../ComingSoonSlider/ComingSoonSlider";
import { ComingSoonSliderNew } from "../ComingSoonSliderNew/ComingSoonSliderNew";
import { NowInTheatersCarousel } from "../NowInTheatersComponent/NowInTheatersCarousel"
import { RecentNewsSlider } from "../RecentNewsSlider/RecentNewsSlider"
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

import { FilterFilms } from "../FilterFilms/FilterFilms";



import "./Main.css";
import { ReactNode } from "react";

interface ILayoutProps {
    children : ReactNode
}




export function Main(props: ILayoutProps) {
    return (

        <main>

            {/* <ComingSoonSliderNew></ComingSoonSliderNew>
            <NowInTheatersCarousel></NowInTheatersCarousel>
            <CarouselCelebrities></CarouselCelebrities>
            <RecentNewsSlider></RecentNewsSlider> */}
            {props.children}

        </main>
            
    )
};

