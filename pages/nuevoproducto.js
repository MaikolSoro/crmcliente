import React from 'react';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NuevoProducto = () => {

	// Formulario para nuevos productos
	const formik = useFormik({
		initialValues: {
			nombre:'',
			existencia: '',
			precio: ''
		},
		validationSchema: Yup.object({
			nombre: Yup.string()
						.required('Nombre del producto es obligatorio'),
			existencia: Yup.number()
						.required('Agrega la cantidad disponible')
						.positive('No se aceptan números negativos')
						.integer('La existencia deben ser números enteros'),
			precio:Yup.number()
					.required('El precio es obligatorio')
					.positive('No se aceptan números negativos')
		})
	})
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
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.nombre}
								/>
						</div>

						{ formik.touched.nombre && formik.errors.nombre ? (
								<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
									<p className="font-bold">Error</p>
									<p>{formik.errors.nombre}</p>
								</div>
							) : null }
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="existencia">
								Cantidad Disponible
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="existencia"
									type="number"
									placeholder="Cantidad Disponible"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.existencia}
								/>
						</div>
						{ formik.touched.existencia && formik.errors.existencia ? (
								<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
									<p className="font-bold">Error</p>
									<p>{formik.errors.existencia}</p>
								</div>
							) : null }
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
								Precio
							</label>
								<input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									id="precio"
									type="number"
									placeholder="Precio Producto"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.precio}
								/>
						</div>
						{ formik.touched.precio && formik.errors.precio ? (
								<div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
									<p className="font-bold">Error</p>
									<p>{formik.errors.precio }</p>
								</div>
							) : null }
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