import React from "react";

type User = {
    name: string
    age: number
}

type PhotoType = {
    large: string
    small: string
}

type ServerResponseType<D> = {
    errorCode: number
    messages: Array<string>
    data: D
}

const response1 : ServerResponseType<User>= {
    errorCode: 1,
    messages: ['ww', 'ss'],
    data: {
        name: 'Andre',
        age: 40
    }
}

const response2 : ServerResponseType<PhotoType>= {
    errorCode: 1,
    messages: ['ww', 'ss'],
    data: {
        large: 'string',
        small: "string"
    }
}

const initial = {
    age: 10,
    name: 'Vasya',
    photo: null as PhotoType | null
}

type StateType = typeof initial

const reducer = (state: StateType , action: any) => {

    state.photo= {
        large: '',
        small: ''
    }

    return state
}













