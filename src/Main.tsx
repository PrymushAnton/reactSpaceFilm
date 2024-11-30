// import React, { useState, useRef } from "react";
// import "./static/css/Main.css"

// export function Main(){
//     return (
//         <div>
//             <div id="comingSoonDiv">
//                 <div id="frame21">
//                     <h2 id="comingSoon">Coming soon</h2>
//                     <div id="line"></div>
//                 </div>
//             </div>
//             <div id="maindiv">
//                 <div id="sliderMain">
//                     <p id="upNext">Up next</p>
//                     <div id="captainAmerica">
//                         <p id="CaptainAmericaBraveNewWorld">Captain America: Brave New World</p>
//                         <img id="CaptainImage" src="https://m.media-amazon.com/images/M/MV5BNjI4MDRiNmItZmI2OC00MWY0LTk4NjQtODIxNzQzOGU3NTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
//                         <p id="WatchtheNewTrailerfromD23Brazil">Watch the New Trailer from D23 Brazil</p>
//                         <div id="play">
//                             <div id="ellipse7"></div>
//                             <div id="ellipse8"></div>
//                             <div id="polygon2"></div>
//                         </div>
//                     </div>
//                     <div id="bridgetJones">
//                         <p id="BridgetJonesMadAbouttheBoy">Bridget Jones: Mad About the Boy</p>
//                         <img id="bridgetJonesImage" src="https://m.media-amazon.com/images/M/MV5BYjA0MWNjYjAtZDBiMC00ZjAzLTlkNjUtOWQxYWYzZjlhNWU1XkEyXkFqcGc@._V1_.jpg" alt="" />
//                         <p id="ReneeZellwegerReturns">Renée Zellweger Returns</p>
//                         <div id="play">
//                             <div id="ellipse7"></div>
//                             <div id="ellipse8"></div>
//                             <div id="polygon2"></div>
//                         </div>
//                     </div>
//                     <div id="whatIf">
//                         <p id="WhatIfSeason3">What If…?’ Season 3</p>
//                         <img id="WhatIfImage" src="https://upload.wikimedia.org/wikipedia/en/b/ba/What_If...%3F_season_3_poster.jpeg" alt="" />
//                         <p id="WatchtheOfficialTrailer">Watch the Official Trailer</p>
//                         <div id="play">
//                             <div id="ellipse7"></div>
//                             <div id="ellipse8"></div>
//                             <div id="polygon2"></div>
//                         </div>
//                     </div>
//                     <div id="missionImpossible">
//                         <img id="mainMissionImpossibleImg" src="https://i.ytimg.com/vi/PvI5YXk6Mjs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDh8ojFgQuGDbnOEGCf9xQ4_BXBPg" alt="" />
//                         <div id="transparentTransition"></div>
//                         <img id="imageMIssionImpossible" src="https://www.justwatch.com/images/poster/322031969/s166/missiia-nevypolnima-8" alt="" />
//                         <div id="button">
//                             <div id="ellipse5"></div>
//                             <div id="ellipse6"></div>
//                             <div id="polygon1"></div>
//                         </div>
//                         <p id="MissionImpossibleTheFinalReckoning">Mission: Impossible – The Final Reckoning</p>
//                         <p id="WatchTheFirstTeaser">Watch the First Teaser</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { ComingSoonSlider } from "./ComingSoonSlider";
import "./static/css/Main.css";

export function Main() {
    return (
        <div>
            <ComingSoonSlider></ComingSoonSlider>
        </div>
    )
}