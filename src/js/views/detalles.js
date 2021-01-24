import React from "react";
import { Link } from "react-router-dom";

const Detalles = props => {
	return (
		<div className="container">
			<h1 className="display-4">Vista detallada</h1>
			<Link to="/" className="btn btn-primary">
				Back Home
			</Link>
		</div>
	);
};

export default Detalles;
