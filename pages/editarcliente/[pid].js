import React from 'react';
import { useRouter } from 'next/router';
const EditarCliente = () => {

	// obtener el Id actual
	const router = useRouter();
	const { query: { id } } = router;

	console.log(id);


	return ( 
		<h1>Desde editar</h1>
	 );
}
 
export default EditarCliente;