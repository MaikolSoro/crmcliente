import React from 'react';
import Swal from 'sweetalert2';
import { gql, useMutation } from '@apollo/client';

const ELIMINAR_CLIENTE = gql`
	mutation eliminarCliente($id: ID!) {
  		eliminarCliente(id:$id)
	}
`;

const Cliente = ({cliente}) => {

	// mutation para eliminar cliente
	const [ eliminarCliente ] = useMutation( ELIMINAR_CLIENTE );
	
	const { nombre, apellido, empresa, email } = cliente;

	// Eliminar un cliente
	const confirmarEliminarCliente = () => {
		
		Swal.fire({
            title: '¿Deseas eliminar a este cliente?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'No, Cancelar'
          }).then( async (result) => {
            if (result.value) {

				try {
					// Eliminar por el ID
					const { data } =  await eliminarCliente({
						variables: {
							id 
						}
					});
					console.log(data);
                    // Mostrar una alerta
                    Swal.fire(
                        'Eliminado!',
						data.eliminarCliente,
                        'success'
                    )
					
				} catch (error) {
					console.log(error);
				}
            }
          })
	}
	return ( 
		<tr>
			<td className="border px-4 py-2"> {nombre} {apellido}</td>
			<td className="border px-4 py-2"> {empresa}</td>
			<td className="border px-4 py-2"> {email}</td>
			<td className="border px-4 py-2">
				<button 
					type="button"
					className="flex justify-center items-center bg-red-800 py-2 px-4 w-full text-white rounded text-xs uppercase font-bold"
					onClick={() => confirmarEliminarCliente() }
				>
					Eliminar
					<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 ml-2"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
				</button>
			</td>
	  	</tr>
	 );
}
 
export default Cliente;