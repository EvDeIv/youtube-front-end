import axios, { axiosClassic } from '../api/interceptors'
import { IUser, IUserDto } from '../types/user.interface'

export const UserService = {
	async getProfile() {
		return await axios.get<IUser>('/user/profile')
	},

	async getMostPopular() {
		return await axiosClassic.get<IUser[]>('/user/most-popular')
	},

	async updateProfile(body: IUserDto) {
		return await axios.put<IUser>('/user/profile', body)
	}
}
