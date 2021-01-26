import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
// Estos cards deben ser creados con un bucle..pendiente
export const Cards = ({ item }) => {
	return (
		<div className="card m-2">
			<img className="card-img-top" src="..." alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					This is a wider card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
				<p className="card-text">
					<small className="text-muted">Last updated 3 mins ago</small>
				</p>
			</div>
		</div>
	);
};

Cards.propTypes = {
	item: Proptypes.object
};
