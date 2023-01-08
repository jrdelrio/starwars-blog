import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

	let [favourites, setFavourites] = useState(['fav1', 'fav2', 'fav3', 'fav4']);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className='main-logo' src='https://www.freepnglogos.com/uploads/star-wars-logo-31.png' />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button {favourites.length}
					</button>
					<ul className="dropdown-menu">
						{favourites.map((name, index)=>{
							return(
								<li className="dropdown-item" href="#" key={index}>{name} <i className="fa-regular fa-trash-can"></i></li>
							)
						})}
					</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
