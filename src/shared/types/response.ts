interface ISuccess<T>{
    status: "success"
    data: T
}

interface IError{
    status: "error"
    message: string
}

export type Response<T> = IError | ISuccess<T>

