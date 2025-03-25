import axios from "axios";

const DEFAULT_HEADERS = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

const request = axios.create({
	baseURL: process.env.REACT_APP_URL_API,
	headers: DEFAULT_HEADERS,
});

export const get = async (url, option = {}) => {
	const response = await request.get(url, option);
	return response.data;
};

export default request;
