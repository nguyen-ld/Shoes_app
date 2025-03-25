import * as request from "../untils/request";

export const ProductList = async (id_categories) => {
	try {
		const res = await request.get(`getListProduct/${id_categories}`);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
