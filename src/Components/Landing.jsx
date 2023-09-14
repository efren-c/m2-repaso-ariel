import { useDispatch } from "react-redux"
import React from "react"
import { useNavigate } from "react-router-dom"
import { setUser } from "../redux/actions"

export default function Landing(props) {

    const [input, setInput] = React.useState({
        name: "",
        email: ""
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (event) => {
        const { value, name } = event.target
        setInput({
            ...input,
            [name]: value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(setUser(input))
        navigate("/home")
    }


    return (
        <div>
            <h2>Welcome!</h2>

            <form onSubmit={handleSubmit} >
                <label>Name</label>
                <input type="text" name="name" value={input.name} onChange={handleChange} />
                <br />

                <label>Email</label>
                <input type="email" name="email" value={input.email} onChange={handleChange} />
                <br />

                <button type="submit" onClick={handleSubmit} >Set user</button>
            </form>
        </div>
    )
}