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

    const displayedFilms = showAllFilms ? actor.films : actor.films.slice(0, 4);

    return (
        <div className='containerMainActor'>
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
                    {displayedFilms.map((film: { src: string; name: string; description: string; rating: number }, idx: number) => (
                        <div className="filmsAndSerialsInformationDiv" key={idx}>
                            <img id="imgFilm" src={film.src} alt={film.name} />
                            <h5 id="filmTitle">{film.name}</h5>
                            <div className='ratingFilmsAndSerials'>
                                <p id="filmStars">{getStarsFromPercentage(film.rating)}</p>
                                <p id="percentText">{film.rating}%</p>
                            </div>
                            <p id="descriptionFilm">{film.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
