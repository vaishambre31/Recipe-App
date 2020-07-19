import api from "../../api/index";
import Keys from "../../config/keys";
import { GET_RECIPE, GET_RECIPES, SET_ERROR } from "../types";

const Get_Recipes = () => async dispatch => {
    try {
        const headers = {
            "Content-Type": "application/json"
        };

        const res = await api.get(`recipes/random?number=10&apiKey=${Keys.API_KEY}`, headers);

        if (res.status === 200) {
            dispatch({
                type: GET_RECIPES,
                payload: res.data.recipes
            })
        } else {
            dispatch({
                type: SET_ERROR,
                payload: res.message
            })
        }

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message
        })
    }
}

const Get_Recipe = id => async dispatch => {

    try {
        const headers = {
            "Content-Type": "application/json"
        };

        const res = await api.get(`recipes/${id}/information?apiKey=${Keys.API_KEY}`, headers);
        if (res.status === 200) {
            dispatch({
                type: GET_RECIPE,
                payload: res.data
            })
        }

    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: error.message
        })
    }
}

export {
    Get_Recipes,
    Get_Recipe
}