import "./CatalogFilms.css"
import { getStarsFromPercentage } from "../NowInTheatersComponent/NowInTheatersCarousel"
// import { IFilm } from "../../hooks/useCategory";
// import { ICategories } from "../CatalogList/CatalogList"


interface IFilm{
    id: number,
    genres: string[],
    name: string,
    src: string,
    rating: number,
    description: string,
}

interface IFilmsProps{
    filteredFilms: IFilm[]
}



export function CatalogFilms(props: IFilmsProps) {

    const sliceFilms = [];
    for (let i = 0; i < props.filteredFilms.length; i += 6) {
        sliceFilms.push(props.filteredFilms.slice(i, i + 6));
    }
    console.log(sliceFilms)
    return (
        <div className="FilterFilmsMainDiv">
            {sliceFilms.map((slice, index) => (
                    <div key={index} className="FilterFilmsDiv">
                        {slice.map((item, idx) => (
                            <div className="FilterFilmsInformationDiv" key={idx}>
                                <img id="imgFilm" src={item.src} alt={item.name} />
                                <h5 id="filmTitle">{item.name}</h5>
                                <div className='ratingFilterFilms'>
                                    <p id="filmStars">{getStarsFromPercentage(item.rating)}</p>
                                    <p id="percentText">{item.rating}%</p>
                                </div>
                                <p id="descriptionFilm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    )
}