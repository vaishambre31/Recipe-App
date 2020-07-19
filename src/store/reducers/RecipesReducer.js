import { GET_RECIPE, GET_RECIPES, SET_ERROR } from "../types";

const initialState = {
    recipes: [],
    error: null,
    recipe: null
}

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_RECIPES:
            return {
                ...state,
                error: null,
                recipes: payload
            }
        case GET_RECIPE:
            return {
                ...state,
                error: null,
                recipe: payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}