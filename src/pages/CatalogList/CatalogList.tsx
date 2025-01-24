
import { CatalogFilms } from "../../shared/CatalogFilms/CatalogFilms"
import { FilmsFilter } from "../../shared/FilmsFilter/FilmsFilter"
import { FiltersDiv } from "../../shared/FiltersDiv/FiltersDiv"

import "./CatalogList.css"
import { useEffect, useState } from "react"

import { useFilms } from "../../hooks/useFilms"


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
import { FilmsInCatalog } from "../../shared/FilmsInCatalog/FilmsInCatalog"





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


// const films = [
//     {id: 1, categories: {"genres":["fantasy", "action", "detective", "adventure", "comedy"]}, src: RedOne, name: "Red One", description: filmsDescription.RedOneDescription, rating: 87 },
//     {id: 2, categories: {"genres":["detective"]}, src: Conclave, name: "Conclave", description: filmsDescription.ConclaveDescription, rating: 75 },
//     {id: 3, categories: {"genres":["drama", "comedy"]}, src: bestChristmas, name: "The Best Christmas Pageant Ever", description: filmsDescription.bestChristmasDescription, rating: 95 },
//     {id: 4, categories: {"genres":["thriller", "horror"]}, src: Heretic, name: "Heretic", description: filmsDescription.HereticDescription, rating: 50 },
//     {id: 5, categories: {"genres":["thriller"]}, src: Juror2, name: "Juror #2", description: filmsDescription.Juror2Description, rating: 82 },
//     {id: 6, categories: {"genres":["drama", "fantasy"]}, src: Meanwhile, name: "Meanwhile on Earth", description: filmsDescription.MeanwhileDescription, rating: 92 },
//     {id: 7, categories: {"genres":["drama", "comedy"]}, src: Anora, name: "Anora", description: filmsDescription.AnoraDescription, rating: 66 },
//     {id: 8, categories: {"genres":["action", "adventure", "thriller"]}, src: Venom, name: "Venom: The Last Dance", description: filmsDescription.VenomDescription, rating: 78 },
//     {id: 9, categories: {"genres":["drama", "comedy"]}, src: christmasEve, name: "Christmas Eve in Miller's Point", description: filmsDescription.christmasEveDescription, rating: 88 },
//     {id: 10, categories: {"genres":["drama", "historical"]}, src: smallThings, name: "Small Things Like These", description: filmsDescription.smallThingsDescription, rating: 80 },
//     {id: 11, categories: {"genres":["fantasy", "adventure"]}, src: Overlord, name: "Overlord: The Sacred Kingdom", description: filmsDescription.OverlordDescription, rating: 60 },
//     {id: 12, categories: {"genres":["drama"]}, src: pianoLesson, name: "The Piano Lesson", description: filmsDescription.pianoLessonDescription, rating: 50 },
//     {id: 13, categories: {"genres":["drama", "comedy"]}, src: aRealPain, name: "A Real Pain", description: filmsDescription.aRealPainDescription, rating: 40 },
//     {id: 14, categories: {"genres":["documental"]}, src: Fanmade, name: "Fanmade: ENHYPEN", description: filmsDescription.FanmadeDescripton, rating: 77 },
//     {id: 15, categories: {"genres":["action", "thriller"]}, src: weekendInTaipei, name: "Weekend in Taipei", description: filmsDescription.weekendInTaipeiDescription, rating: 90 },
//     {id: 16, categories: {"genres":["drama"]}, src: Here, name: "Here", description: filmsDescription.HereDescription, rating: 85 },
//     {id: 17, categories: {"genres":["drama", "historical"]}, src: Blitz, name: "Blitz", description: filmsDescription.BlitzDescription, rating: 70 },
//     {id: 18, categories: {"genres":["drama"]}, src: theCarpenter, name: "The Carpenter", description: filmsDescription.theCarpenterDescription, rating: 80 },
// ];


// export interface ICategories{
//     [key: string]: string[]
// }



export interface IUser{
    src: string,
    name: string
}

export interface IReview{
    text: string,
    mark: number,
    user: IUser
}


export interface IFilm{
    id: number,
    name: string,
    src: string,
    rating: number,
    year: number,
    baseLanguage: string,
    homeCountry: string,
    ageRestriction: string,
    description: string,
    genres: string[],
    photo1: string,
    photo2: string,
    photo3: string,
    photo4: string,
    actors: string[],
    reviews: IReview[],
    [key: string]: any;

}



export interface IFilters{
    [key: string]: string[]
}


export function CatalogList(){


    const {films, isLoading, error} = useFilms()


    const [filters, setFilters] = useState<IFilters>({})

    const [filteredFilms, setFilteredFilms] = useState<IFilm[]>([])

    useEffect(() => {

        let isKeysEmpty = true

        Object.keys(filters).forEach((key) => {
            if (filters[key].length !== 0) {
                isKeysEmpty = false
            }
        })

        if (Object.keys(filters).length === 0 || isKeysEmpty){
            console.log(1434298753485)
            setFilteredFilms(films)
        } else {
            console.log(546456456546)
            setFilteredFilms(films.filter((film) => {
                let conditionIsTrue = false
                Object.keys(film).forEach((filmKey) => {
                    try {
                        conditionIsTrue = filters[filmKey].every((filterArrayElement) => {
                            console.log(film[filmKey].includes(filterArrayElement))
                            
                            return film[filmKey].includes(filterArrayElement)
                        })
                    } catch {

                    }
                    
                })
                return conditionIsTrue
            }))
        }
    }, [filters, films])


    return (
        <div id="CatalogList">
            <FiltersDiv setFilters={setFilters} filters={filters}></FiltersDiv>
            <FilmsInCatalog films={filteredFilms}></FilmsInCatalog>
        </div>
    )
}