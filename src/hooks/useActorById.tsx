import { useState, useEffect } from 'react';
import { Response } from '../shared/types/response';


// used for ActorPage
export function useActorById(id: number) {

    const [actor, setActor] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(() => {
        async function getActor() {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/api/actor/${id}`)
                const result: Response<any> = await response.json()
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

        getActor()

    }, [id])

    return { 
        actor: actor, 
        isLoading: isLoading, 
        error: error
    }
}