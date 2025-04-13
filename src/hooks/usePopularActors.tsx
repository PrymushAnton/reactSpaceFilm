import { useState, useEffect } from 'react';
import { Response } from '../shared/types/response';

export interface IActorPayload {
    id: number;
    name: string;
    src: string;
    bornInDate: string;
    bornInCity: string;
    bornInCountry: string;
    biography: string;
    height: string;
    mother: string;
    father: string;
}

// used for getting popular actors on the main page
export function usePopularActors() {

    const [actors, setActors] = useState<IActorPayload[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(() => {
        async function getPopularActors() {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/actor/get-popular`)
                const result: Response<IActorPayload[]> = await response.json()
                if (result.status === "error") {
                    setError(result.message)
                    setIsLoading(false)
                    return
                }
                setActors(result.data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                setIsLoading(false)
            }
        }

        getPopularActors()

    }, [])

    return { 
        actors: actors, 
        isLoading: isLoading, 
        error: error
    }
}