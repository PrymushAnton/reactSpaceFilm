import Carousel from 'react-bootstrap/Carousel';
import './CarouselCelebrities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usePopularActors } from '../../hooks/usePopularActors';
import { useEffect, useState } from 'react';
import { IActorPayload} from '../../hooks/usePopularActors';
import { Link } from 'react-router-dom';


export function CarouselCelebrities() {

    const { actors, isLoading, error } = usePopularActors();
    const [items, setItems] = useState<IActorPayload[][]>([])


    useEffect(() => {
        if (actors) {
            const itemsSync = []
            for (let i = 0; i < actors.length; i += 6) {
                itemsSync.push(actors.slice(i, i + 6))
            }

            setItems(itemsSync)
        }        
    }, [actors])

    return (
        <div id ="MostPopularCelebritiesCont">
            <div id = "celebritiesdiv">
                <div>
                    <h4 className="MostPopularCelebritiesText">Most popular celebrities</h4>
                    <h6 id='byRankingText'>BY RANKING</h6>
                </div>
            </div>
            
            <Carousel
                interval={null}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
            >
                {items.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div id = "sliderPageDiv">
                            {item.map((obj, idx) => (
                                <Link to={`/actor/${obj.id}`} id='celebrityDiv' key={idx}>
                                    <img className="img-thumbnail" src={obj.src}/>
                                    <p id ="name">{obj.name}</p>
                                </Link>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
