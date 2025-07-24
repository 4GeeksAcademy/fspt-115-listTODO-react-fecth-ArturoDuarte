import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home2 = () => {

	const [tareas, setTareas] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const username = `arturey`;
	const usuarioApi = `https://playground.4geeks.com/todo/users/${username}`
	const tareasApi = `https://playground.4geeks.com/todo/todos/${username}`


	const cargarTareas = async () => {
		const response = await fetch(usuarioApi)
		console.log(response);
		if (!response.ok) {
			console.log("Create User");
			crearUsuario()
			return;
		}
		const data = await response.json();
		setTareas(data.todos)
	}



	const crearUsuario = async () => {
		const response = await fetch(usuarioApi, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
		})
		console.log(response);
		const data = await response.json()
		console.log(data);
		cargarTareas()

	}

	const crearTareas = async () => {
		const response = await fetch(tareasApi, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				"label": inputValue,
				"is_done": false
			})
		})
		const data = await response.json()
		console.log(data);
		cargarTareas()

	}
	const deleteTarea = async (id) => {
		await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
			 method: "DELETE"
			 });
	     cargarTareas();
	};


	useEffect(() => {
		cargarTareas()




	}, [])

	const handleKeyUp = (e) => {
		if (e.key === "Enter" && inputValue.trim() !== "") {
			crearTareas()
			setInputValue("");
			console.log(inputValue);

		}
	}
	const eliminarTarea = (index) => {
		let newTareas = tareas.filter((tarea, i) => {
			/*	console.log("Tarea:", tarea);
				console.log("Índice actual:", i);
				console.log("Índice a eliminar:", index);
				console.log("¿Se queda en la lista?", i !== index);
				console.log("--------------------"); */ // esto me lo ha enseñado robert para poder ver como funciona eliminar las tareas porque investigue que es con el filter pero no tenia clara la idea de como utilizarlo para eliminar dichas tareas//
			return i !== index;
		});
		console.log("lista actual: " + tareas);

		setTareas(newTareas)
		console.log("Nueva lista:" + newTareas);



	}


	return (
		<div className="container mt-4">
			<h2>Lista de tareas</h2>
			<input type="text"
				className="form-control"
				placeholder="Inserte acá la tarea pendiente"
				value={inputValue}
				onChange={(e) => { setInputValue(e.target.value) }}
				onKeyUp={handleKeyUp} />
			<ul className="list-group mt-3">
				{tareas.map((tarea, index, id) => (
					<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
						{tarea.label}
						<button key={index} className="btn btn-sm btn-danger" onClick={() => deleteTarea(tarea.id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};
