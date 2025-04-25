import { Carousel } from "react-bootstrap";
import { IFavouriteFilm, useFavouriteFilms } from "../../hooks/useFavouriteFilms";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FavouriteFilmsSlider.css"

export function FavouriteFilmsSlider() {

    const {films, isLoading, error} = useFavouriteFilms()

    const [items, setItems] = useState<IFavouriteFilm[][]>([])
    
    useEffect(() => {
        if (films) {
            const itemsSync = []
            for (let i = 0; i < films.length; i += 6) {
                itemsSync.push(films.slice(i, i + 6))
            }

            setItems(itemsSync)
        }        
    }, [films])

    return (
        <Carousel
            interval={null}
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        >
            {items.map((item, index) => (
                <Carousel.Item key={index}>
                    <div className="carouselItem">
                        {item.map((obj, idx) => (
                            <Link to={`/film/${obj.id}`} className='filmDivProfile' key={idx}>
                                <img className="favouriteFilmImageProfile" src={obj.src}/>
                                <p className ="name">{obj.name.length > 17 ? obj.name.slice(0, 17) + "..." : obj.name}</p>
                            </Link>
                        ))}
                    </div>
                    
                </Carousel.Item>
            ))}
        </Carousel>
    )
}