import './ActorPage.css';
import { useActorById } from '../../hooks/useActorById'; 
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import RedOne from "./images/redOne.png";
import Conclave from "./images/conclave.png";
import bestChristmas from "./images/best christmas.png";
import Heretic from "./images/heretic.png";
import Juror2 from "./images/juror2.png";
import Meanwhile from "./images/meanwhile.png";
import Anora from "./images/anora.png";
import Venom from "./images/venom.png";

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

export function getStarsFromPercentage(percentage: number) {
    const stars = Math.floor(percentage / 20);
    const hasHalfStar = percentage % 20 >= 10;
    return "★".repeat(stars) + (hasHalfStar ? "☆" : "") + "☆".repeat(5 - stars - (hasHalfStar ? 1 : 0));
}

export function ActorPage() {
    const { id } = useParams<{ id: string }>();
    const { actor } = useActorById(Number(id)); 
    const [showAllFilms, setShowAllFilms] = useState(false);

    if (!actor) {
        return <div>netu actera</div>; 
    }

    const displayedFilms = showAllFilms ? films : films.slice(0, 4);

    return (
        <div>
            <img className='actorImage' src={actor.src} alt="" />

            <div className="Div">
                <div className="Text">{actor.name}</div>
                <div className="hr"></div>
            </div>

            <div className='overviewDiv'>
                <div className='overviewTextDiv'>
                    <div className='sideline'></div>
                    <div className='overviewText'>Overview</div>
                </div>
                <div className='overviewDivInfo'>
                    <div className='BornText'>Born</div>
                    <div className='BornInfo'>{actor.bornInDate} · {actor.bornInCity} {actor.bornInCountry}</div>
                    <div className='line' id='overviewFirstLine'></div>
                    <div className='HeightText'>Height</div>
                    <div className='HeightInfo'>{actor.height}</div>
                    <div className='line' id='overviewSecondLine'></div>
                    <div className='ParentsText'>Parents</div>
                    <div className='ParentsInfo'>{actor.mother} and {actor.father}</div>
                </div>
            </div>

            <div className='biographyDiv'>
                <div className='biographyTextDiv'>
                    <div className='biographySideline'></div>
                    <div className='biographyText'>Biography</div>
                </div>
                <div className='biographyDivInfo'>{actor.biography}</div>
            </div>

            <div className='filmsAndSerialsDivMain'>
                <div className='filmsAndSerialsTextDiv'>
                    <div className='filmsAndSerialsSideline'></div>
                    <div className='filmsAndSerialsText'>Films and Serials</div>
                    <button id="ViewAllButtonFilmsAndSerials" onClick={() => setShowAllFilms(!showAllFilms)}>
                        {showAllFilms ? "Hide all" : "View All"}
                    </button>
                </div>

                <div className="filmsAndSerialsDiv">
                    {displayedFilms.map((item, idx) => (
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
        </div>
    );
}
