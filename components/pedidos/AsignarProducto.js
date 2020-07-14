import React,{ useState, useEffect } from 'react';
import Select from 'react-select';
import { gql, useQuery } from '@apollo/client';

const OBTENER_PRODUCTOS = gql`
	query obtenerProductos{
		obtenerProductos {
			id
			nombre
			precio
			existencia
		}
   }
`;

	
const AsignarProductos = () => {

	//state local del componente
	const [ productos, setProductos] = useState([]);

	//consulta a la base de datos

	const { data, loading, error, } = useQuery(OBTENER_PRODUCTOS);

	useEffect(() => {
		//TODO: función para pasar a pedidosState
	},[productos])
	// console.log(data);	

	const seleccionarProducto = producto => {
		setProductos(producto);

	}	

	if(loading) return null;
	const { obtenerProductos } = data;
	return ( 
		<>
			<p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">2. - Selecciona o busca los productos</p>
			<Select 
				className="mt-3"
				 options={ obtenerProductos }
				onChange={ opcion => seleccionarProducto(opcion) }
				isMulti={ true }
				getOptionValue={ opciones => opciones.id }
				getOptionLabel={ opciones => `${opciones.nombre} - ${opciones.existencia} Disponibles` }
				placeholder= "Busque o Seleccionar el cliente"
				noOptionsMessage={() => "No hay resultados"}
			/>
		</> 
	 );
}
 
export default AsignarProductos;