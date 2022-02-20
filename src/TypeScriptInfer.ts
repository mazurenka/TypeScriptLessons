import React from "react";

type UserType = {
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

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ['ww', 'ss'],
    data: {
        name: 'Andre',
        age: 40
    }
}

const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['ww', 'ss'],
    data: {
        large: 'string',
        small: "string"
    }
}

type Nullable<T> = null | T

const initial = {
    age: 10,
    name: 'Vasya',
    users: null as Nullable<UserType>,
    photo: null as Nullable<PhotoType>
}

type StateType = typeof initial

// type ActionCreator1Type = ReturnType<typeof ActionCreator1>
// type ActionCreator2Type = ReturnType<typeof ActionCreator2>
// const action1: ActionCreator1Type = {type: 'SET_AGE', age: 22}
// const action2: ActionCreator2Type = {type: "SET_NAME", name: "Andre"}

type ActionsTypes = ReturnType<PropertiesType<typeof actions>>

const reducer = (state: StateType, action: ActionsTypes) => {
    switch (action.type) {
        case "SET_AGE":
            return {...state, age: action.age}
        case "SET_NAME":
            return {...state, name: action.name}
    }


    return state
}


type HipHopType<T> = T extends "user" ? UserType : PhotoType

let a: HipHopType<"user"> = {
    name: 'Dmitry',
    age: 44
}

let b: HipHopType<"photo"> = {
    large: "22",
    small: ""
}

const obj = {
    a: {name: "Dimych"},
    b: {age: 55},
    c: {site: {title: "www"}}
}

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

const hipHop: ReturnType<PropertiesType<typeof actions>> = {type: "SET_NAME", name: '12'}

const actions = {
    ActionCreator1: (age: number) => ({type: 'SET_AGE', age} as const),
    ActionCreator2: (name: string) => ({type: 'SET_NAME', name} as const)
}
















