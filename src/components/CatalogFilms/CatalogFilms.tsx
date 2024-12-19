import "./CatalogFilms.css"
import { getStarsFromPercentage } from "../NowInTheatersComponent/NowInTheatersCarousel"
// import { IFilm } from "../../hooks/useCategory";
import { ICategories } from "../CatalogList/CatalogList"


interface IFilm{
    categories: ICategories,
    title: string,
    src: string,
    percentage: number,
    description: string,
}

interface IFilmsProps{
    filteredFilms: IFilm[],

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
                    <div className="FilterFilmsDiv">
                        {slice.map((item, idx) => (
                            <div className="FilterFilmsInformationDiv" key={idx}>
                                <img id="imgFilm" src={item.src} alt={item.title} />
                                <h5 id="filmTitle">{item.title}</h5>
                                <div className='ratingFilterFilms'>
                                    <p id="filmStars">{getStarsFromPercentage(item.percentage)}</p>
                                    <p id="percentText">{item.percentage}%</p>
                                </div>
                                <p id="descriptionFilm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    )
}