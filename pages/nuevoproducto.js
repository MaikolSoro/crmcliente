import React from 'react';
import Layout from '../components/Layout';


const NuevoProducto = () => {
	return (
		<Layout>
			<h1 className="text-2xl text-gray-800 font-light text-center">Crear Nuevo Producto</h1>

			<div className="flex justify-center mt-5">
				<div className="w-full max-w-lg">
					<form
						className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
						// onSubmit={formik.handleSubmit}
					>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
								Nombre
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="nombre"
									type="text"
									placeholder="Nombre Producto"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.nombre}
								/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="existencia">
								Cantidad Disponible
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="existencia"
									type="number"
									placeholder="Cantidad Disponible"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.nombre}
								/>
						</div>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
								Precio
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="precio"
									type="number"
									placeholder="Precio Producto"
									// onChange={formik.handleChange}
									// onBlur={formik.handleBlur}
									// value={formik.values.nombre}
								/>
						</div>

						<input  type="submit" 
								className="bg-gray-800 w-full mt-5 p-2 text-white uppercase font-bold hover:bg-gray-900"
								value="Agregar Nuevo Producto"
						/>
					</form>
				</div>
			</div>
			
		</Layout> 
	 );
}
 
export default NuevoProducto;