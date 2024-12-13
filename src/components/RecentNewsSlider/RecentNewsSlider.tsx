import image1 from "./images/1.png";
import image2 from "./images/2.png";
import image3 from "./images/3.png";
import image4 from "./images/4.png";
import image5 from "./images/5.png";
import image6 from "./images/6.png";
import "./RecentNewsSlider.css";


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
                <h4 className="RecentNewsText">Recent news</h4>
                <button id= "ViewAllButtRecentNews">View all</button>
            </div>
            <div className="news-grid">
                {newsItems.map((item, index) => (
                    <div key={index} className="news-card">
                        <div className="ImageContainer">
                            <img src={item.src} alt={item.title} />
                        </div>  
                        <div className="NewsContent">
                            <h3>{item.title}</h3>
                            <button id="ReadMoreButt">Read more</button> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}