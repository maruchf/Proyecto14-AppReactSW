import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import { Navbar } from "../component/navbar";
import { Cards } from "../component/cards";
import { Link } from "react-router-dom";

export const Home = props => {
	const BASE_URL = "https://swapi.dev/api"; //url de la doc
	const [people, setPeople] = useState([]); //useState para personajes-peopleSW
	useEffect(() => {
		const getPeople = async url => {
			try {
				let response = await fetch(url);
				let responseObject = await response.json();
				setPeople(responseObject.results);
			} catch (error) {
				console.log(error);
			}
		};
		let url = `${BASE_URL}/people`;
		getPeople(url);
	}, []);
	//hacer fetch o async await a la api para obtener personajes
	//Endpoint a usar People
	// tiene sentido usar async await para no hacer fetch dentro de una promesa
	//.the... incluso puede hacerse un ciclo el fetch no es async
	// fetch(url)
	// 	.then(response => response.json()) //convierte respuesta a json
	// 	.then(responseObject => setPeople(responseObject.results)) // con los personajes enviar estado
	//.catch(error => console.log(error)); // captura errores
	return (
		<div className="container-fluid bg-dark pt-4">
			<div className="row border-secondary border-top border-bottom ">
				<h3 className="text-white pl-3 pt-1">BROWSER DATABANK //</h3>
			</div>
			<div className="row pt-4">
				<div className="col-3">
					<Navbar />
				</div>
				<div className="card-holder col-9 d-flex justify-content-start">
					{people.map((people, index) => {
						//envío información como propiedad item (desde objeto people) y el
						//index debido a que en la respuesta de la API no vi un id
						return <Cards key={index} item={people} />;
					})}
					;
				</div>
			</div>
		</div>
	);
};
