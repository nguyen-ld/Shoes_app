import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";
import Product from "../pages/ProductManagement";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route Route element={<MainLayout />}>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Product />} />
			<Route path="/add-products" element={<AddProduct />} />
		</Route>
	),
	{
		future: {
			v7_relativeSplatPath: true,
		},
	}
);

export default router;
