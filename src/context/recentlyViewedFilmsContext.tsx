import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { IFilm } from "../shared/OneFilmInCatalog/OneFilmInCatalog";

interface IRecentlyViewedFilmsContext {
	recentlyViewedFilms: IFilm[];
	addFilm: (film: IFilm) => void;
	removeFilm: (film: IFilm) => void;
	isInContext: (film: IFilm) => void;
}

const initialValue = {
	recentlyViewedFilms: [],
	addFilm: ({}) => {},
	removeFilm: ({}) => {},
	isInContext: ({}) => {},
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

	const [recentlyViewedFilms, setRecentlyViewedFilms] = useState<IFilm[]>([]);

	// useEffect(() => {
	// 	console.log(recentlyViewedFilms);
	// }, [recentlyViewedFilms]);

	function addFilm(film: IFilm) {
        if (!isInContext(film)) {
            if (recentlyViewedFilms.length < 3) {
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

	return (
		<recentlyViewedFilmsContext.Provider
			value={{
				recentlyViewedFilms: recentlyViewedFilms,
				addFilm: addFilm,
				removeFilm: removeFilm,
				isInContext: isInContext,
			}}
		>
			{children}
		</recentlyViewedFilmsContext.Provider>
	);
}
