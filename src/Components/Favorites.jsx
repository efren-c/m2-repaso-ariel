import { useDispatch, useSelector } from "react-redux"
import { completedFav, ratingFav } from "../redux/actions"
import { Link } from "react-router-dom"

export default function Favorites(props) {
    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(ratingFav({ id: Number(event.target.name), rating: event.target.value }))
    }

    return (
        <div>
            <h2>Favorites</h2>
            <hr />
            {
                favorites.map((fav, index) => (
                    <div key={index} >
                        <Link to={`/detail/${fav.id}`} >
                            <h3>Name: {fav.name}</h3>
                        </Link>
                        <h3>Rating: {fav.rating}</h3>

                        <select onChange={handleChange} name={fav.id}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <button onClick={() => dispatch(completedFav(fav.id))}>
                            {
                                fav.completed
                                    ? <h3 style={{ color: "green" }} >Completed</h3>
                                    : <h3 style={{ color: "green" }} >Incomplete</h3>
                            }
                        </button>
                    </div>
                ))
            }
        </div>
    )
}