import { useState } from 'react'
import './App.css'
import Home from "./Components/Home"
import Favorites from "./Components/Favorites"
import Detail from "./Components/Detail"
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
	const [count, setCount] = useState(0)

	const { pathname } = useLocation()

	return (
		<div>
			<h1>Rick & Morty - Episodes</h1>
			{
				pathname !== "/" ? <Navbar /> : null
			}
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	)
}

export default App
