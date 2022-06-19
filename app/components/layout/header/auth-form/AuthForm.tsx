import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'

import stylesIcons from './../icons/IconsRight.module.scss'
import styles from './AuthForm.module.scss'
import { IAuthFileds } from './auth-form.interface'
import { validEmail } from './auth.constants'

const AuthForm: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFileds>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFileds> = (data) => {
		if (type === 'login') console.log('login', data.email)
		else if (type === 'register') console.log('register', data.email)
	}

	return (
		<div className={styles.wrapper}>
			<button className={stylesIcons.button}>
				<FaUserCircle fill='#A4A4A4' />
			</button>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter a valid email address'
						}
					})}
					placeholder='Email'
					error={errors.email}
				/>
				<Field
					{...register('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Password should have at least 6 symbols'
						}
					})}
					placeholder='Password'
					error={errors.password}
				/>
				<Button className={'mt-2'} onClick={() => setType('login')}>
					Login
				</Button>
				<button className={'text-sm'} onClick={() => setType('register')}>
					Register
				</button>
			</form>
		</div>
	)
}

export default AuthForm
