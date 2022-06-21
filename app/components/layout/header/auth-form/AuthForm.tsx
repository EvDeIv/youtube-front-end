import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaUserCircle } from 'react-icons/fa'

import Button from '@/components/ui/Button/Button'
import Field from '@/components/ui/Field/Field'

import { useOutside } from '@/hooks/useOutside'

import stylesIcons from './../icons/IconsRight.module.scss'
import styles from './AuthForm.module.scss'
import { IAuthFileds } from './auth-form.interface'
import { validEmail } from './auth.constants'

const AuthForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false)

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
		<div className={styles.wrapper} ref={ref}>
			<button
				className={stylesIcons.button}
				onClick={() => setIsShow((prevValue) => !prevValue)}
			>
				<FaUserCircle fill='#A4A4A4' />
			</button>
			{isShow && (
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
					<div className={'mt-5 mb-1 text-center'}>
						<Button onClick={() => setType('login')}>Login</Button>
						<button
							className={styles.register}
							onClick={() => setType('register')}
						>
							Register
						</button>
					</div>
				</form>
			)}
		</div>
	)
}

export default AuthForm
