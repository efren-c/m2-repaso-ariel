import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function Detail(props) {
    const { id } = useParams()
    const favorites = useSelector(state => state.favorites) //para jalar todos los favoritos
    const actualfavs = favorites.filter(fav => fav.id === Number(id))[0]

    return (
        <div>
            <h3>Detail</h3>
            <hr />
            <h4>Name: {actualfavs.name}</h4>
            <h3>Characters: </h3>
            {
                actualfavs.characters.map((char, index) => (
                    <p key={index}>
                        <a href={char} target="_blank">{char}</a>
                    </p>
                ))
            }
        </div>
    )
}