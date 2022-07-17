import axios from 'axios'
import Cookies from 'js-cookie'

export const getContentType = () => ({
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*'
})

export const axiosClassic = axios.create({
	// baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	baseURL: `${process.env.APP_URL}/api`,
	headers: getContentType()
})

const instance = axios.create({
	// baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	baseURL: `${process.env.APP_URL}/api`,
	headers: getContentType()
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`

	return config
})

export default instance
