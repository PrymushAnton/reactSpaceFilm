import './ActorPage.css'
import { Link } from 'react-router'

import RedOne from "./images/redOne.png";
import Conclave from "./images/conclave.png";
import bestChristmas from "./images/best christmas.png";
import Heretic from "./images/heretic.png";
import Juror2 from "./images/juror2.png";
import Meanwhile from "./images/meanwhile.png";
import Anora from "./images/anora.png";
import Venom from "./images/venom.png";
import christmasEve from "./images/christmas eve.png";
import smallThings from "./images/small things.png";
import Overlord from "./images/overlord.png";
import pianoLesson from "./images/piano lesson.png";
import aRealPain from "./images/a real pain.png";
import Fanmade from "./images/fanmade.png";
import weekendInTaipei from "./images/weekend in taipei.png";
import Here from "./images/here.png";
import Blitz from "./images/blitz.png";
import theCarpenter from "./images/the carpenter.png";

const filmsDescription = {
    RedOneDescription: "After Santa Claus -- Code Name: RED ONE -- is kidnapped, the North...",
    ConclaveDescription: "CONCLAVE follows one of the world’s most secretive and ancient events...",
    bestChristmasDescription: "The Herdmans are absolutely the worst kids in the history of the...",
    HereticDescription: "Two young missionaries are forced to prove their faith when they knock on...",
    Juror2Description: "'Juror #2' follows family man Justin Kemp (Nicholas Hoult) who...",
    MeanwhileDescription: "Elsa (Megan Northam, in her debut feature starring role), along with her...",
    AnoraDescription: "Sean Baker's Palme d'Or winner ANORA is an audacious, thrilling, and...",
    VenomDescription: "In Venom: The Last Dance, Tom Hardy returns as Venom, one of Marvel's...",
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
];

export function getStarsFromPercentage(percentage: any) {

    const stars = Math.floor(percentage / 20); 
    const hasHalfStar = percentage % 20 >= 10; 
    return "★".repeat(stars) + (hasHalfStar ? "☆" : "") + "☆".repeat(5 - stars - (hasHalfStar ? 1 : 0));
}

interface INowInTheatersCarouselProps{
    span: number;
}

export function ActorPage() {
    const sliceFilms: { src: string; title: string; description: string; percentage: number }[][] = [];
    for (let i = 0; i < films.length; i += 4) {
        sliceFilms.push(films.slice(i, i + 4));
    }


    return (
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
            <div className="Div">
                <div className="Text">Kelsey Asbille</div>
                <div className="Actress">Actress</div>
                <div className="Ellipse"></div>
                <div className="Producer">Producer</div>
                <div className="hr"></div>
            </div>
{/* сорян за дивы, иначе бы дизайн с фигмы криво пошел бы */}
{/* там где в конце Text - это сама надпись, а Info - это уже сама информация */}
            <div className='overviewDiv'>
                <div className='overviewTextDiv'>
                    <div className='sideline'></div>
                    <div className='overviewText'>Overview</div>
                </div>
                <div className='overviewDivInfo'>
                    <div className='BornText'>Born</div>
                    <div className='BornInfo'>September 9, 1991 · Columbia, South Carolina, USA</div>

                    <div className='line' id='overviewFirstLine'></div>

                    <div className='HeightText'>Height</div>
                    <div className='HeightInfo'>1.70 m</div>

                    <div className='line' id='overviewSecondLine'></div>

                    <div className='ParentsText'>Parents</div>
                    <div className='ParentsInfo'>Jum Chow and Jean Chow</div>
                    
                    <div className='line' id='overviewThirdLine'></div>

                    <div className='officialSiteText'>Official site</div>
                    <Link className='officialSiteInfo' to='https://www.instagram.com/kelseyasbille/'>Instagram</Link>
                </div>
            </div>

            <div className='biographyDiv'>
                <div className='biographyTextDiv'>
                    <div className='biographySideline'></div>
                    <div className='biographyText'>Biography</div>
                </div>
                <div className='biographyDivInfo'>Kelsey Asbille Chow is an American actress. She is known for her role as Mikayla in the Disney XD sitcom Pair of Kings. From 2005 to 2009, she had a recurring role as Gigi Silveri on the drama One Tree Hill. She portrayed Tracy Stewart in MTV's Teen Wolf from 2015-2016. Chow was born to a Chinese father and an American mother in Columbia, South Carolina. Her father is the son of Chinese immigrants and her mother is a descendant of White Americans. She stated in 2010 that she wanted to be able to speak more fluently in Mandarin Chinese as well as be able to read traditional Chinese characters. She has two younger siblings: a brother who is two years younger and a sister who is eight years younger. She attended Hammond (High) School in Columbia, SC. Kelsey Chow's residence is in Los Angeles, California, but she lives in New York City where she attends Columbia University.</div>
            </div>

            <div className='filmsAndSerialsDivMain'>
                <div className='filmsAndSerialsTextDiv'>
                    <div className='filmsAndSerialsSideline'></div>
                    <div className='filmsAndSerialsText'>Films and Serials</div>
                    <button id="ViewAllButtonFilmsAndSerials">View all</button>
                </div>

                {sliceFilms.map((slice, index) => (
                    <div key={index}>
                        <div className="filmsAndSerialsDiv">
                            {slice.map((item, idx) => (
                                <div className="filmsAndSerialsInformationDiv" key={idx}>
                                    <img id="imgFilm" src={item.src} alt={item.title} />
                                    <h5 id="filmTitle">{item.title}</h5>
                                    <div className='ratingFilmsAndSerials'>
                                        <p id="filmStars">{getStarsFromPercentage(item.percentage)}</p>
                                        <p id="percentText">{item.percentage}%</p>
                                    </div>
                                    <p id="descriptionFilm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='triviaDiv'>
                <div className='triviaTextDiv'>
                    <div className='triviaSideline'></div>
                    <div className='triviaText'>Trivia</div>
                </div>
                <div className='triviaDivInfo'>
                    <div className='firstTrivia'>She was born to Jim and Jean Chow.</div>
                    <div className='line' id='triviaFirstLine'></div>
                    <div className='secondTrivia'>She has a younger sister and brother.</div>
                    <div className='line' id='triviaSecondLine'></div>
                    <div className='thirdTrivia'>She graduated from Hammond School in her hometown of Columbia</div>
                    <div className='line' id='triviaThirdLine'></div>
                    <div className='fourthTrivia'>She had her breakout television role as Gigi Silveri on One Tree Hill.</div>
                    <div className='line' id='triviaFourthLine'></div>
                    <div className='fifthTrivia'>She shared the small screen with G. Hannelius in the 2010 on TV</div>
                </div>
            </div>
        </body>
        </html>
    )
}