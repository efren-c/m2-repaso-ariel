import './App.css'
import Home from "./Components/Home"
import Favorites from "./Components/Favorites"
import Detail from "./Components/Detail"
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {

	const { pathname } = useLocation()

	return (
		<div>
			<h1>Rick & Morty</h1>
			{
				pathname !== "/" ? <Navbar /> : null
			}
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
