import { ComingSoonSlider } from "./ComingSoonSlider";
import { NowInTheatersCarousel } from "./NowInTheatersCarousel"
import "./static/css/Main.css";

export function Main() {
    return (
        <div className="Maindiv">
            <ComingSoonSlider></ComingSoonSlider>
            <NowInTheatersCarousel></NowInTheatersCarousel>
        </div>
    )
}