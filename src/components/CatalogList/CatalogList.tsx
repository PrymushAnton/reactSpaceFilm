
import { FilterFilms } from "../CatalogFilms/CatalogFilms"
import { FilmsFilter } from "../FilmsFilter/FilmsFilter"

import "./CatalogList.css"
import { useState } from "react"


import RedOne from "./images/redOne.png";
import Conclave from "./images/conclave.png";
import bestChristmas from "./images/best christmas.png";
import Heretic from "./images/heretic.png";
import Juror2 from "./images/juror2.png";
import Meanwhile from "./images/meanwhile.png";
import Anora from "./images/anora.png";
import Venom from "./images/venom.png";
import christmasEve from "./images/christmas eve.png";
import smallThings from "./images/small things.png";
import Overlord from "./images/overlord.png";
import pianoLesson from "./images/piano lesson.png";
import aRealPain from "./images/a real pain.png";
import Fanmade from "./images/fanmade.png";
import weekendInTaipei from "./images/weekend in taipei.png";
import Here from "./images/here.png";
import Blitz from "./images/blitz.png";
import theCarpenter from "./images/the carpenter.png";


import { OneItem } from "../OneItem/OneItem";

import { Genres } from "../Genres/Genres";

const filmsDescription = {
    RedOneDescription: "After Santa Claus -- Code Name: RED ONE -- is kidnapped, the North...",
    ConclaveDescription: "CONCLAVE follows one of the world’s most secretive and ancient events...",
    bestChristmasDescription: "The Herdmans are absolutely the worst kids in the history of the...",
    HereticDescription: "Two young missionaries are forced to prove their faith when they knock on...",
    Juror2Description: "'Juror #2' follows family man Justin Kemp (Nicholas Hoult) who...",
    MeanwhileDescription: "Elsa (Megan Northam, in her debut feature starring role), along with her...",
    AnoraDescription: "Sean Baker's Palme d'Or winner ANORA is an audacious, thrilling, and...",
    VenomDescription: "In Venom: The Last Dance, Tom Hardy returns as Venom, one of Marvel's...",
    christmasEveDescription: "In CHRISTMAS EVE IN MILLER’S POINT, a rambunctious extended...",
    smallThingsDescription: "Small Things Like These takes place over Christmas in 1985, when devoted...",
    OverlordDescription: "After twelve years of playing his favorite MMORPG game...",
    pianoLessonDescription: "Set in 1936 Pittsburgh during the aftermath of the Great Depression...",
    aRealPainDescription: "Mismatched cousins David (Jesse Eisenberg) and Benji (Kieran Culkin)...",
    FanmadeDescripton: "Celebrating the power of music and community, Fanmade: ENHYPEN...",
    weekendInTaipeiDescription: "Years ago, committed DEA agent John Lawlor fell in love with Joey Kwang...",
    HereDescription: "Reuniting the director, writer and stars of Forrest Gump, Here is an original...",
    BlitzDescription: "Sir Steve McQueen's “Blitz” follows the epic journey of George...",
    theCarpenterDescription: "After the death of his father, a fighter becomes an apprentice to a..."
}


const films = [
    {categories: [["fantasy", "action", "detective", "adventure", "comedy"]], src: RedOne, title: "Red One", description: filmsDescription.RedOneDescription, percentage: 87 },
    {categories: [["detective"]], src: Conclave, title: "Conclave", description: filmsDescription.ConclaveDescription, percentage: 75 },
    {categories: [["drama", "comedy"]], src: bestChristmas, title: "The Best Christmas Pageant Ever", description: filmsDescription.bestChristmasDescription, percentage: 95 },
    {categories: [["thriller", "horror"]], src: Heretic, title: "Heretic", description: filmsDescription.HereticDescription, percentage: 50 },
    {categories: [["thriller"]], src: Juror2, title: "Juror #2", description: filmsDescription.Juror2Description, percentage: 82 },
    {categories: [["drama", "fantasy"]], src: Meanwhile, title: "Meanwhile on Earth", description: filmsDescription.MeanwhileDescription, percentage: 92 },
    {categories: [["drama", "comedy"]], src: Anora, title: "Anora", description: filmsDescription.AnoraDescription, percentage: 66 },
    {categories: [["action", "adventure", "thriller"]], src: Venom, title: "Venom: The Last Dance", description: filmsDescription.VenomDescription, percentage: 78 },
    {categories: [["drama", "comedy"]], src: christmasEve, title: "Christmas Eve in Miller's Point", description: filmsDescription.christmasEveDescription, percentage: 88 },
    {categories: [["drama", "historical"]], src: smallThings, title: "Small Things Like These", description: filmsDescription.smallThingsDescription, percentage: 80 },
    {categories: [["fantasy", "adventure"]], src: Overlord, title: "Overlord: The Sacred Kingdom", description: filmsDescription.OverlordDescription, percentage: 60 },
    {categories: [["drama"]], src: pianoLesson, title: "The Piano Lesson", description: filmsDescription.pianoLessonDescription, percentage: 50 },
    {categories: [["drama", "comedy"]], src: aRealPain, title: "A Real Pain", description: filmsDescription.aRealPainDescription, percentage: 40 },
    {categories: [["documental"]], src: Fanmade, title: "Fanmade: ENHYPEN", description: filmsDescription.FanmadeDescripton, percentage: 77 },
    {categories: [["action", "thriller"]], src: weekendInTaipei, title: "Weekend in Taipei", description: filmsDescription.weekendInTaipeiDescription, percentage: 90 },
    {categories: [["drama"]], src: Here, title: "Here", description: filmsDescription.HereDescription, percentage: 85 },
    {categories: [["drama", "historical"]], src: Blitz, title: "Blitz", description: filmsDescription.BlitzDescription, percentage: 70 },
    {categories: [["drama"]], src: theCarpenter, title: "The Carpenter", description: filmsDescription.theCarpenterDescription, percentage: 80 },
];



export function CatalogList(){

    
    const [filteredFilms, setFilteredFilms] = useState(0)

    let maxValue: number = 0;
    for (let i = 0; i < films.length; i++) {
        if (films[i].categories.length > maxValue) {
            maxValue = films[i].categories.length
        }
    }

    let arrayOfCategories = []


    for (let i = 0; i < maxValue; i++){
        arrayOfCategories.push([])
        console.log("i", i)
    }
    console.log(arrayOfCategories)

    const [categories, setCategories] = useState<string[][]>(arrayOfCategories)



    return (
        <div id="CatalogList">
            {/* <FilmsFilter></FilmsFilter>
            <FilterFilms films={films}></FilterFilms> */}
            

            <Genres films={films} id={0} setFunction={setCategories} categories={categories}></Genres>

        
        
        </div>
    )
}