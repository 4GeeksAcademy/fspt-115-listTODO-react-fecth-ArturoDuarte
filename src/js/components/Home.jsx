/*import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [nombre, setNombre] = useState("")
	const [frase, setFrase] = useState("")
	const [imagen, setImagen] = useState("")
	const [personajes, setPersonajes] = useState([
		{
			nombre: "Gandalf",
			frase: "You shall not pass!",
			imagen: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/10/why-gandalf-needs-a-staff-in-the-lord-of-the-rings.jpg"
		},
		{
			nombre: "Frodo Baggins",
			frase: "I will take the Ring to Mordor, though I do not know the way.",
			imagen: "https://imgs.search.brave.com/kybaEeJZjkEpNRQ-jOmtjxC_TRkUSKI_j5EZoaMqm-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Vs/ZHJhZ29udmVyZGUv/aW1hZ2VzLzAvMDAv/RnJvZG9fYW5pbGxv/LmpwZy9yZXZpc2lv/bi9sYXRlc3Qvc2Nh/bGUtdG8td2lkdGgt/ZG93bi8xOTU_Y2I9/MjAxNDA3MDkyMzIy/MDUmcGF0aC1wcmVm/aXg9ZXM"
		}

	]);
	const agregarPersonaje = (e) => {
		e.preventDefault()
		if (!nombre || !frase || !imagen) return;

		const nuevoPersonaje = {
			nombre: nombre,
			frase: frase,
			imagen: imagen
		}
		setPersonajes([...personajes, nuevoPersonaje])
	}


	return (

		<div className="container mt-4">
			<h2 className="text-center">Crea un personaje del Señor de los Anillos</h2>

			<form onSubmit={agregarPersonaje}>
				<input
					type="text"
					placeholder="nombre del personaje"
					className="form-control mb-2"
					onChange={(e) => { setNombre(e.target.value) }}
					value={nombre} />
				<input
					type="text"
					placeholder="frase del personaje"
					className="form-control mb-2"
					onChange={(e) => { setFrase(e.target.value) }}
					value={frase} />
				<input
					type="text"
					placeholder="url del personaje"
					className="form-control mb-2"
					onChange={(e) => { setImagen(e.target.value) }}
					value={imagen}
				/>
				<button type="submit" className="btn btn-success">Agregar personaje</button>
			</form>
			<div className="row">
				{personajes.map((personaje, index) => {
					return (
						<div className="col-md-4 mb-4" key={index}>
							<div className="card h-100 shadow">
								<img
									style={{ height: "300px", objectFit: "cover" }}
									className="card-image-top"
									src={personaje.imagen}
									alt=""
								/>
								<div className="card-body">
									<div className="card-title">{personaje.nombre}</div>
									<p className="card-text">{personaje.frase}</p>
								</div>
							</div>

						</div>
					)	
				})}
			</div>
		</div>

	)
}
*/ //ESTO LO HAGO PARA PRACTICAR VIENDO LOS VIDEOS DE LAS CLASES DE JAVIER Y ASI IR GUARDANDO MAS INFORMACION ESCRIBIENDO YO MISMO LAS COSAS, PASO A PASO.!!!!


	