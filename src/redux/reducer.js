import { ADD_FAV, COMPLETED_FAV, DEL_FAV, RATING_FAV, SET_USER } from "./action-types"

const initialState = {
    favorites: [],
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }

        case ADD_FAV:
            return {
                ...state,
                favorites: [...state, action.payload]
            }

        case DEL_FAV:
            const newFavs = state.favorites.filter(fav => fav.id !== action.payload)
            return {
                ...state,
                favorites: newFavs
            }

        case COMPLETED_FAV:
            const newFavsComplete = state.favorites.map(fav =>
                fav.id === action.payload ? { ...fav, completed: !fav.complete } : { ...fav }
            )
            return {
                ...state,
                favorites: newFavsComplete
            }

        case RATING_FAV:
            const newFavRating = state.favorites.map(fav =>
                fav.id === action.payload.id ? { ...fav, rating: action.payload.rating } : { ...fav }
            )
            return {
                ...state,
                favorites: newFavRating
            }

        default:
            return { ...state }
    }
}

export default reducer