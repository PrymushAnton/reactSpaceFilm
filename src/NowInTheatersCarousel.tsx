import Carousel from 'react-bootstrap/Carousel';
import './static/css/NowInTheatersCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import RedOne from "./static/images/NowInTheaters/redOne.png";
import Conclave from "./static/images/NowInTheaters/conclave.png";
import bestChristmas from "./static/images/NowInTheaters/best christmas.png";
import Heretic from "./static/images/NowInTheaters/heretic.png";
import Juror2 from "./static/images/NowInTheaters/juror2.png";
import Meanwhile from "./static/images/NowInTheaters/meanwhile.png";
import Anora from "./static/images/NowInTheaters/anora.png";
import Venom from "./static/images/NowInTheaters/venom.png";
import christmasEve from "./static/images/NowInTheaters/christmas eve.png";
import smallThings from "./static/images/NowInTheaters/small things.png";
import Overlord from "./static/images/NowInTheaters/overlord.png";
import pianoLesson from "./static/images/NowInTheaters/piano lesson.png";
import aRealPain from "./static/images/NowInTheaters/a real pain.png";
import Fanmade from "./static/images/NowInTheaters/fanmade.png";
import weekendInTaipei from "./static/images/NowInTheaters/weekend in taipei.png";
import Here from "./static/images/NowInTheaters/here.png";
import Blitz from "./static/images/NowInTheaters/blitz.png";
import theCarpenter from "./static/images/NowInTheaters/the carpenter.png";

const filmsDescription = {
    RedOneDescription: "After Santa Claus -- Code Name: RED ONE -- is kidnapped, the North...",
    ConclaveDescription: "CONCLAVE follows one of the world’s most secretive and ancient events...",
    bestChristmasDescription: "The Herdmans are absolutely the worst kids in the history of the world...",
    HereticDescription: "Two young missionaries are forced to prove their faith when they knock on...",
    Juror2Description: "'Juror #2' follows family man Justin Kemp (Nicholas Hoult) who, while...",
    MeanwhileDescription: "Elsa (Megan Northam, in her debut feature starring role), along with her...",
    AnoraDescription: "Sean Baker's Palme d'Or winner ANORA is an audacious, thrilling, and...",
    VenomDescription: "In Venom: The Last Dance, Tom Hardy returns as Venom, one of Marvel's...",
    christmasEveDescription: "In CHRISTMAS EVE IN MILLER’S POINT, a rambunctious extended...",
    smallThingsDescription: "Small Things Like These takes place over Christmas in 1985, when devoted..",
    OverlordDescription: "After twelve years of playing his favorite MMORPG game, Momonga...",
    pianoLessonDescription: "Set in 1936 Pittsburgh during the aftermath of the Great Depression...",
    aRealPainDescription: "Mismatched cousins David (Jesse Eisenberg) and Benji (Kieran Culkin)...",
    FanmadeDescripton: "Celebrating the power of music and community, Fanmade: ENHYPEN...",
    weekendInTaipeiDescription: "Years ago, committed DEA agent John Lawlor fell in love with Joey Kwang...",
    HereDescription: "Reuniting the director, writer and stars of Forrest Gump, Here is an original...",
    BlitzDescription: "Sir Steve McQueen's “Blitz” follows the epic journey of George (Elliott Heffernan)...",
    theCarpenterDescription: "After the death of his father, a fighter becomes an apprentice to a..."
}


const films = [
    { src: RedOne, title: "Red One", description: filmsDescription.RedOneDescription, percentage: 87 },
    { src: Conclave, title: "Conclave", description: filmsDescription.ConclaveDescription, percentage: 75 },
    { src: bestChristmas, title: "The Best Christmas Pageant Ever", description: filmsDescription.bestChristmasDescription, percentage: 95 },
    { src: Heretic, title: "Heretic", description: filmsDescription.HereticDescription, percentage: 50 },
    { src: Juror2, title: "Juror #2", description: filmsDescription.Juror2Description, percentage: 82 },
    { src: Meanwhile, title: "Meanwhile on Earth", description: filmsDescription.MeanwhileDescription, percentage: 92 },
    { src: Anora, title: "Anora", description: filmsDescription.AnoraDescription, percentage: 66 },
    { src: Venom, title: "Venom: The Last Dance", description: filmsDescription.VenomDescription, percentage: 78 },
    { src: christmasEve, title: "Christmas Eve in Miller's Point", description: filmsDescription.christmasEveDescription, percentage: 88 },
    { src: smallThings, title: "Small Things Like These", description: filmsDescription.smallThingsDescription, percentage: 80 },
    { src: Overlord, title: "Overlord: The Sacred Kingdom", description: filmsDescription.OverlordDescription, percentage: 60 },
    { src: pianoLesson, title: "The Piano Lesson", description: filmsDescription.pianoLessonDescription, percentage: 50 },
    { src: aRealPain, title: "A Real Pain", description: filmsDescription.aRealPainDescription, percentage: 40 },
    { src: Fanmade, title: "Fanmade: ENHYPEN", description: filmsDescription.FanmadeDescripton, percentage: 77 },
    { src: weekendInTaipei, title: "Weekend in Taipei", description: filmsDescription.weekendInTaipeiDescription, percentage: 90 },
    { src: Here, title: "Here", description: filmsDescription.HereDescription, percentage: 85 },
    { src: Blitz, title: "Blitz", description: filmsDescription.BlitzDescription, percentage: 70 },
    { src: theCarpenter, title: "The Carpenter", description: filmsDescription.theCarpenterDescription, percentage: 80 },
];

function getStarsFromPercentage(percentage: any) {
    const stars = Math.floor(percentage / 20); 
    const hasHalfStar = percentage % 20 >= 10; 
    return "★".repeat(stars) + (hasHalfStar ? "☆" : "") + "☆".repeat(5 - stars - (hasHalfStar ? 1 : 0));
}

export function NowInTheatersCarousel() {
    const sliceFilms = [];
    for (let i = 0; i < films.length; i += 6) {
        sliceFilms.push(films.slice(i, i + 6));
    }

    return (
        <div className="NowInTheatersMainContainer">
            <div className="NowInTheatersContainer">
                <h2 id="NowInTheatersText">Now in theaters</h2>
                <button id="ViewAllButton">View all</button>
            </div>
            <Carousel indicators={false} nextIcon={<span className="carousel-control-next-icon" />} prevIcon={<span className="carousel-control-prev-icon" />}>
                {sliceFilms.map((slice, index) => (
                    <Carousel.Item key={index}>
                        <div className="NowInTheatersDiv">
                            {slice.map((item, idx) => (
                                <div className="NowInTheatersInformationDiv" key={idx}>
                                    <img id="imgFilm" src={item.src} alt={item.title} />
                                    <h5 id="filmTitle">{item.title}</h5>
                                    <div className='ratingNowInTheaters'>
                                        <p id="filmStars">{getStarsFromPercentage(item.percentage)}</p>
                                        <p id="percentText">{item.percentage}%</p>
                                    </div>
                                    <p id="descriptionFilm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
