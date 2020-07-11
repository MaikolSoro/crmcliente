import React from 'react';
import Layout from '../components/Layout';


const NuevoCliente = () => {
	return ( 
		<Layout>
			<h1 className="text-2xl text-gray-800 font-smaller">Nuevo Cliente</h1>

			<div className="flex justify-center mt-5">
				<div className="w-full max-w-lg">
					<form
						className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
					>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
								Nombre
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="nombre"
									type="text"
									placeholder="Nombre Cliente"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.email}
								/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
								Apellido
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="apellido"
									type="text"
									placeholder="Apellido Cliente"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.email}
								/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empresa">
								Empresa
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="empresa"
									type="text"
									placeholder="Empresa Cliente"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.email}
								/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
								Email
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="email"
									type="email"
									placeholder="Email Cliente"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.email}
								/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
								Teléfono
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="telefono"
									type="tel"
									placeholder="Teléfono Cliente"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.email}
								/>
						</div>
						
						<input  type="submit" 
								className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
								value="Registrar Cliente"/>

					</form>
				</div>
			</div>
		</Layout>
	 );
}
 
export default NuevoCliente;