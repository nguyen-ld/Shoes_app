import * as request from "../untils/request";

export const ProductCategoriesList = async () => {
	try {
		const res = await request.get("getListCategories");
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
