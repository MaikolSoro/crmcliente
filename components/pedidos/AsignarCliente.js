import React,{ useState, useEffect } from 'react';
import Select from 'react-select';


const clientes = [
	{ id: 1, nombre: 'Juan'},
	{ id: 2, nombre: 'Maikol'},
	{ id: 3, nombre: 'Erick'}
]


const AsignarCliente = () => {

	const [ cliente, setCliente ] = useState([]);

	useEffect(() =>{
		console.log(cliente);
	},[cliente])

	const seleccionarCliente = (clientes) => {
		setCliente(clientes);
	}

	return ( 
		<Select 
			options={ clientes }
			isMulti={true}
			onChange={ opcion => seleccionarCliente(opcion) }
			getOptionValue={ opciones => opciones.id }
			getOptionLabel={ opciones => opciones.nombre}
			placeholder= "Busque o Seleccionar el cliente"
			noOptionsMessage={() => "No hay resultados"}
		/>
	 );
}
 
export default AsignarCliente;