import image1 from "./static/images/news/1.png";
import image2 from "./static/images/news/2.png";
import image3 from "./static/images/news/3.png";
import image4 from "./static/images/news/4.png";
import image5 from "./static/images/news/5.png";
import image6 from "./static/images/news/6.png";
import "./static/css/RecentNews.css";

// /* Rectangle 15 */

// position: absolute;
// width: 269px;
// height: 116px;
// left: 0px;
// top: 64px;

// background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 65.5%);


export function RecentNewsSlider(){
    const newsItems = [
        { src: image1, title: "‘Stree,’ Indian Horror Hit Film, Set for Multiple Sequels Targets Return to Madhya Pradesh"},
        { src: image2, title: "‘Landman’ Opens as Paramount's Biggest Premiere Premiere in Two Years"},
        { src: image3, title: "Luca Guadagnino and Daniel Craig Are in Talks Make Superhero Debut with DC Studios"},
        { src: image4, title: "Storm Reid Exits ‘Euphoria’ Ahead of Season 3"},
        { src: image5, title: "Jesse Eisenberg to Direct Julianne Moore Musical Comedy",},
        { src: image6, title: "Ryan Gosling talked to a woman In the new instalment of Drive",},
    ];
    return(
        <div className="recent-news">
            <div className="news-header">
                <h2>Recent news</h2>
                <button style={{
                    borderRadius: 15,
                    width: 80,
                    height: 40,
                    backgroundColor: "white",
                    border: "solid black",
                }}>View all</button>
            </div>
            <div className="news-grid">
                {newsItems.map((item, index) => (
                    <div key={index} className="news-card">
                        <div className="image-container">
                            <img src={item.src} alt={item.title} />
                        </div>
                        <div className="news-content">
                            <h3>{item.title}</h3>
                            <button style={{
                                borderRadius: 15,
                                width: 80,
                                height: 40,
                                backgroundColor: "white",
                                border: "solid black",
                            }}>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}