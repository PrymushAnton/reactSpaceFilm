import { useState, useEffect } from 'react';
import { Response } from '../shared/types/response';

interface IFilmPayload {
    id: number;
    name: string;
    src: string;
    rating: number;
    year: number;
    baseLanguage: string;
    homeCountry: string;
    ageRestriction: string;
    description: string;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
}

// used for Main page carousel
export function useFilmsForComingSoon() {

    const [films, setActor] = useState<IFilmPayload[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(() => {
        async function getFilm() {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/film/get-four`)
                const result: Response<IFilmPayload[]> = await response.json()
                if (result.status === "error") {
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setActor(result.data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }

        getFilm()

    }, [])

    return { 
        films: films, 
        isLoading: isLoading, 
        error: error
    }
}