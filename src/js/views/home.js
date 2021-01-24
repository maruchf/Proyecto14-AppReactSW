import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Cards } from "../component/cards";
import { Link } from "react-router-dom";
export const Home = () => (
	<div className="container-fluid bg-dark">
		<div className="row">
			<h1 className="text-white">Browser Databank //</h1>
		</div>
		<div className="row">
			<div className="col-3">
				<Navbar />
			</div>
			<div className="col-9">
				<Cards />
			</div>
		</div>
	</div>
);
