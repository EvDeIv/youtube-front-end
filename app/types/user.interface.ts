export interface IUser {
	_id: string
	email: string
	name: string
	avatarPath: string
	description: string
	location: string
	subscribersCount: number
	videoCount?: number
	createdAt: string
	updatedAt: string
}

export interface IUserDto
	extends Pick<
		IUser,
		'email' | 'description' | 'name' | 'location' | 'avatarPath'
	> {}
