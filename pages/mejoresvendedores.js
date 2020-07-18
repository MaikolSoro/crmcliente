import React from 'react';
import Layout from '../components/Layout';
import {
	BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

  import { gql, useQuery } from '@apollo/client';

  const MEJORES_VENDEDORES = gql`
	query mejoresVendedores {
		mejoresVendedores {
			vendedor {
				nombre
				email
			}
			total
		}
	}
  `;
  
const MejoresVendedores = () => {

	const { data, loading, error } = useQuery(MEJORES_VENDEDORES);
	
	if(loading) return 'cargando...';

		const { mejoresVendedores } = data;
		const vendedorGrafica = [];

		mejoresVendedores.map((vendedor, index) => {
			vendedorGrafica[index] = {
				...vendedor.vendedor[0],
				total: vendedor.total
			}
		});	
	return (  
		<Layout>
			<h1 className="text-2xl-gray-800 font-smaller">Mejores Vendedores</h1>
			<BarChart
				className="mt-10"
				width={600}
				height={500}
				data={vendedorGrafica}
				margin={{
					top: 5, right: 30, left: 20, bottom: 5,
				}}
      		>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="nombre" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="total" fill="#3182CE" />
			</BarChart>
		</Layout>
	);
}
 
export default MejoresVendedores;