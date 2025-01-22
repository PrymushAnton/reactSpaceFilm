import { useParams } from "react-router-dom"
import "./FilmPage.css"
import { NowInTheatersCarousel } from "../../shared/NowInTheatersComponent/NowInTheatersCarousel"


export function FilmPage() {
    
    const film_information = [
        {
            img: "https://upload.wikimedia.org/wikipedia/en/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg"
        }
    ]

    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg" alt="" />
            <h1>Mission: Impossible - The Final Reckoning</h1>
            <p>2025 ● 1h 32m</p>
            <div className="description">
                <p className="rating">Rating: </p>
                <p className="year">Year:</p>
                <p className="originalName">Original name: </p>
                <p className="director">Director: </p>
                <p className="releaseDate">Release date: </p>
                <p className="language">Language: </p>
                <p className="genre">Genre: </p>
                <p className="duration">Duration: </p>
                <p className="producer">Producer: </p>
                <p className="productionStudio">Production studio: </p>
                <p className="screenplay">Screenplay: </p>
                <p className="starring">Starring: </p>
                <p className="inclusiveAdaptation">Inclusive adaptation: </p>
            </div>
            <div className="information">
                <p className="rating">16+ (Preliminary)</p>
                <p className="year">2025</p>
                <p className="originalName">Mission: Impossible - The Final Reckoning</p>
                <p className="director">Christopher McQuarrie</p>
                <p className="releaseDate">22.05.2025</p>
                <p className="language">Ukrainian language</p>
                <p className="genre">Action, Militant, Thriller</p>
                <p className="duration">2:00</p>
                <p className="producer">USA</p>
                <p className="productionStudio">Paramount Pictures, Skydance Productions</p>
                <p className="screenplay">Christopher McCurry</p>
                <p className="starring">Tom Cruise, Hayley Atwell, Simon Pegg, Pom Klementieff, Ving Rhames, Hannah Quinlivan, Vanessa Kirby, Shea Whigham</p>
                <p className="inclusiveAdaptation">The film is adapted for people with hearing loss and hearing loss. To quickly access this option, add additional information "Greta&Starks" to your smartphone.</p>
                <p className="filmDescription">Tom Cruise is returning in a new installment of the cult franchise "Mission: Impossible - Fallout". Ethan Hunt will face his most dangerous mission of his career!</p>
            </div>
            <div className="imageFilm">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <NowInTheatersCarousel></NowInTheatersCarousel>
            <div className="commentsDiv">
                <div className="comment">
                    {/* system with map, NowInTheatersCarousel like */}
                </div>
            </div>
        </div>
    )
}