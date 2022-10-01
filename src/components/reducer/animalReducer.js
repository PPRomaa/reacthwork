import {useReducer} from "react";

import {CREATE, DELETE} from "./action";

const reducer = (state, action) => {
    switch (action.type) {
        case CREATE:
            const newAnimal = {
                name: action.payload.name,
                id: Date.now()
            }
            return [...state,newAnimal]
        case DELETE:
            const index = state.findIndex(value => value.id === action.payload.id);
            state.splice(index,1)
            return [...state]
        default:
            return [...state]

    }


}

const useAnimalReducer = () => useReducer(reducer, []);

export {
    useAnimalReducer
}
