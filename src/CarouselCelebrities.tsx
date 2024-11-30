import Carousel from 'react-bootstrap/Carousel';
import './static/css/CarouselCelebrities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "./static/images/celebrities/1.png";
import image2 from "./static/images/celebrities/2.png";
import image3 from "./static/images/celebrities/3.png";
import image4 from "./static/images/celebrities/4.png";
import image5 from "./static/images/celebrities/5.png";
import image6 from "./static/images/celebrities/6.png";
import image7 from "./static/images/celebrities/7.png";
import image8 from "./static/images/celebrities/8.png";
import image9 from "./static/images/celebrities/9.png";
import image10 from "./static/images/celebrities/10.png";
import image11 from "./static/images/celebrities/11.png";
import image12 from "./static/images/celebrities/12.png";
import image13 from "./static/images/celebrities/13.png";
import image14 from "./static/images/celebrities/14.png";
import image15 from "./static/images/celebrities/15.png";
import image16 from "./static/images/celebrities/16.png";
import image17 from "./static/images/celebrities/17.png";
import image18 from "./static/images/celebrities/18.png";

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
        <div style={{ margin: "50px auto", padding: "20px", maxWidth: "80%", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                    <h2 className="MostPopularCelebrities">Most popular celebrities</h2>
                    <h5>BY RANKING</h5>
                </div>
                <button style={{
                    borderRadius: 15,
                    width: 80,
                    height: 40,
                    backgroundColor: "white",
                    border: "solid black",
                }}>View all</button>
            </div>
            <Carousel
                indicators={false}
                nextLabel=""
                prevLabel=""
                interval={null}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
            >
                {chunkedItems.map((chunk, index) => (
                    <Carousel.Item key={index}>
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "10px",
                            padding: "10px"
                        }}>
                            {chunk.map((item, idx) => (
                                <div key={idx} style={{ textAlign: "center", width: "150px" }}>
                                    <img
                                        className="img-thumbnail"
                                        style={{
                                            height: "124px",
                                            width: "126px",
                                            objectFit: "cover",
                                            marginBottom: "10px",
                                            borderRadius: "50%"
                                        }}
                                        src={item.src}
                                        alt={item.rank}
                                    />
                                    <h5 style={{ fontSize: "14px", margin: "0" }}>{item.rank}</h5>
                                    <p style={{ fontSize: "12px", color: "gray" }}>{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}/* stree news pc */
