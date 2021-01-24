import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<ul className="nav flex-column">
			<h6 className="text-white">BROWSER</h6>
			<li className="nav-item">
				<a className="nav-link text-white text-uppercase" aria-current="page" href="#">
					All
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Characters
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Creatures
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Droids
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Locations
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Organizations
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Species
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Vehicles
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					Weapons+Tech
				</a>
			</li>
			<li className="nav-item text-white text-uppercase">
				<a className="nav-link" href="#">
					More
				</a>
			</li>
		</ul>
	);
};
