import { useState, useEffect } from 'react';

export function useActorById(id: number) {

    const [actor, setActor] = useState<any>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    console.log(actor)
    useEffect(() => {
        async function getActor() {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3001/actor/${id}`)
                const actorApi = await response.json()
                setActor(actorApi)
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
    console.log(actor)
    return { actor, isLoading, error }
}