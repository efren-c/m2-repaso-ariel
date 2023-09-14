import { ADD_FAV, COMPLETED_FAV, DEL_FAV, RATING_FAV, SET_USER } from "./action-types"

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const addFav = (episode) => {
    return {
        type: ADD_FAV,
        payload: episode
    }
}

export const delFav = (id) => {
    return {
        type: DEL_FAV,
        payload: id
    }
}

export const ratingFav = ({ id, rating }) => {
    return {
        type: RATING_FAV,
        payload: { id, rating }
    }
}

export const completedFav = (id) => {
    return {
        type: COMPLETED_FAV,
        payload: id
    }
}