import { useDispatch } from "react-redux"
import { addFav } from "../redux/actions"
import React from "react"

export default function Card({ episode }) {
    const [isFav, setIsFav] = React.useState(false)

    const dispatch = useDispatch()

    const handleclick = (event) => {
        const newFavorite = {
            ...episode,
            compleated: false,
            rating: 3
        }
        dispatch(addFav(newFavorite))
        setIsFav = true
    }

    return (
        <div>
            <h3>Name: {episode.name}</h3>
            <h3>Episode: {episode.episode}</h3>
            <h3>Air date: {episode.air_date}</h3>
            {
                isFav ? null : <button onClick={handleclick} >Add to favorites</button>
            }
            <hr />
        </div>
    )
}