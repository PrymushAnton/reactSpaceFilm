import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { IFilm } from "../shared/OneFilmInCatalog/OneFilmInCatalog";
import { useFilms } from "../hooks/useFilms";

interface IRecentlyViewedFilmsContext {
	recentlyViewedFilms: IFilm[];
	recommendedFilms: IFilm[];
	addFilm: (film: IFilm) => void;
	removeFilm: (film: IFilm) => void;
	isInContext: (film: IFilm) => void;
	formRecomendations: () => void;
}

const initialValue = {
	recentlyViewedFilms: [],
	recommendedFilms: [],
	addFilm: ({}) => {},
	removeFilm: ({}) => {},
	isInContext: ({}) => {},
	formRecomendations: () => {}
};

const recentlyViewedFilmsContext =
	createContext<IRecentlyViewedFilmsContext>(initialValue);

export function useRecentlyViewedFilmsContext() {
	return useContext(recentlyViewedFilmsContext);
}
interface IRecentlyViewedFilmsContextProps {
	children: ReactNode;
}

export function RecentlyViewedFilmsContextProvider(
	props: IRecentlyViewedFilmsContextProps
) {
	const { children } = props;

	const {films, isLoading, error} = useFilms()

	const [recentlyViewedFilms, setRecentlyViewedFilms] = useState<IFilm[]>([]);

	const [recommendedFilms, setRecommendedFilms] = useState<IFilm[]>([]);

	useEffect(() => {}, [films])

	useEffect(() => {
		console.log(recommendedFilms);
	}, [recommendedFilms]);

	function addFilm(film: IFilm) {
        if (!isInContext(film)) {
            if (recentlyViewedFilms.length < 6) {
                let tempArray = [...recentlyViewedFilms, film];
                setRecentlyViewedFilms(tempArray);
            } else {
                let tempArray = [...recentlyViewedFilms];
                tempArray = tempArray.slice(1);
                tempArray = [...tempArray, film]
                setRecentlyViewedFilms(tempArray);
            }
        }
	}

	function removeFilm(film: IFilm) {}

	function isInContext(film: IFilm) {
        if (recentlyViewedFilms.some((recentlyViewedFilm) => recentlyViewedFilm.id === film.id)){
            return true
        }
        return false
    }

	function formRecomendations(){
		if (recentlyViewedFilms.length > 0){
			let tempGenresArray: string[] = []
			recentlyViewedFilms.forEach((film) => {
				film.genres.forEach((genre) => tempGenresArray.push(genre))
			})

			let genresSet = Array.from(new Set(tempGenresArray))

			let objectGenresCount = Object.fromEntries(genresSet.map(genre => [genre, 0]))
			tempGenresArray.forEach((genre) => {
				objectGenresCount[genre] += 1
			})

			let genre = Object.entries(objectGenresCount)[0][0];
			let genreCount = Object.entries(objectGenresCount)[0][1]

			Object.keys(objectGenresCount).forEach((key) => {
				if (objectGenresCount[key] > genreCount) {
					genre = key
					genreCount = objectGenresCount[key]
				}
			})

			let filteredFilms = films.filter((film) => {
				return film.genres.includes(genre) && !recentlyViewedFilms.some(viewed => viewed.id === film.id)
			})
			filteredFilms = filteredFilms?.slice(0, 6)
			filteredFilms && setRecommendedFilms(filteredFilms)
		}

	}

	return (
		<recentlyViewedFilmsContext.Provider
			value={{
				recentlyViewedFilms: recentlyViewedFilms,
				recommendedFilms: recommendedFilms,
				addFilm: addFilm,
				removeFilm: removeFilm,
				isInContext: isInContext,
				formRecomendations: formRecomendations
			}}
		>
			{children}
		</recentlyViewedFilmsContext.Provider>
	);
}
