import Carousel from 'react-bootstrap/Carousel';
import './CarouselCelebrities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import image7 from "./images/7.png";
import image8 from "./images/8.png";
import image9 from "./images/9.png";
import image10 from "./images/10.png";
import image11 from "./images/11.png";
import image12 from "./images/12.png";
import image13 from "./images/13.png";
import image14 from "./images/14.png";
import image15 from "./images/15.png";
import image16 from "./images/16.png";
import image17 from "./images/17.png";
import image18 from "./images/18.png";

export function CarouselCelebrities() {
    const items = [
        { src: image1, rank: "№ 1", name: "Kelsey Asbille" },
        { src: image2, rank: "№ 2", name: "Margaret Qualley" },
        { src: image3, rank: "№ 3", name: "Cristin Milioti" },
        { src: image4, rank: "№ 4", name: "Keri Russell" },
        { src: image5, rank: "№ 5", name: "Eliana Jones" },
        { src: image6, rank: "№ 6", name: "Naomi Scott" },
        { src: image7, rank: "№ 7", name: "Leila George" },
        { src: image8, rank: "№ 8", name: "Mikey Madison" },
        { src: image9, rank: "№ 9", name: "Ella Purnell" },
        { src: image10, rank: "№ 10", name: "Emily Meade" },
        { src: image11, rank: "№ 11", name: "Genesis Rodriguez" },
        { src: image12, rank: "№ 12", name: "Daniel Zovatto" },
        { src: image13, rank: "№ 13", name: "Alex Hassell" },
        { src: image14, rank: "№ 14", name: "Saleka Shyamalan" },
        { src: image15, rank: "№ 15", name: "Kathryn Hahn" },
        { src: image16, rank: "№ 16", name: "Aubrey Plaza" },
        { src: image17, rank: "№ 17", name: "Colin Farrell" },
        { src: image18, rank: "№ 18", name: "Kelly Reilly" },
    ];

    const chunkedItems = [];
    for (let i = 0; i < items.length; i += 6) {
        chunkedItems.push(items.slice(i, i + 6));
    }

    return (
        <div id ="MostPopularCelebritiesCont">
            <div id = "celebritiesdiv">
                <div>
                    <h4 className="MostPopularCelebritiesText">Most popular celebrities</h4>
                    <h6 id='byRankingText'>BY RANKING</h6>
                </div>
                <button className="ViewAllButtCarouselCelebrities">View all</button>
            </div>
            <Carousel
                interval={null}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
            >
                {chunkedItems.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div id = "sliderPageDiv">
                            {chunk.map((item, idx) => (
                                <div id='celebrityDiv' key={idx}>
                                    <img className="img-thumbnail" src={item.src} alt={item.rank}/>
                                    <h5 id='rank'>{item.rank}</h5>
                                    <p id ="name">{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}
