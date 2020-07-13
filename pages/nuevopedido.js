import React,{ useState, useEffect } from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente';

const NuevoPedido = () => {
	 
	
	return ( 
		<Layout>
			<h1 className="text-2xl-gray-800 font-light">Crear Nuevo Pedido</h1>
			<AsignarCliente />
		</Layout>

	 );
}
 
export default NuevoPedido;