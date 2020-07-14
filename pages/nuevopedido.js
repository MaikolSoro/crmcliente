import React,{ useContext } from 'react';
import Layout from '../components/Layout';
import AsignarCliente from '../components/pedidos/AsignarCliente'; 
import AsignarProducto from '../components/pedidos/AsignarProducto'; 


// Context de pedidos
import PedidoContext from '../context/pedidos/PedidoContext';

const NuevoPedido = () => {
	 
	//Utilizar  context y extraer sus funciones y valores
	const pedidoContext = useContext(PedidoContext);
	
	
	return ( 
		<Layout>
			<h1 className="text-2xl-gray-800 font-light">Crear Nuevo Pedido</h1>
			<AsignarCliente />
			<AsignarProducto />
		</Layout>

	 );
}
 
export default NuevoPedido;