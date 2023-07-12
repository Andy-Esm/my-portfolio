import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

import { CircleDecoration, ButtonMain } from '../../components';
import { slideUp } from '../../utils/motion';
import icons from '../../assets/icons.svg';
import style from './contacts.module.css';

function Contacts() {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(!loading);
		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Andrey Esman',
					from_email: form.email,
					to_email: 'frontend@aesman.ru',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
			)
			.then(
				() => {
					setLoading(false);
					alert('Спасибо, что написали мне. Я постараюсь ответить как можно скорее');

					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					setLoading(false);
					console.error(error);

					alert('Упс! Что-то пошло не так. Попробуйте еще раз');
				},
			);
	};

	return (
		<motion.section
			className={style.contacts}
			initial='hidden'
			whileInView='visible'
			id='contacts'
		>
			<div className='container'>
				<motion.div className={style.formWrapper}>
					<h3 className={`${style.contactsTitle} title`}>
						Контакты<span className={style.accent}>.</span>
					</h3>
					<p className={style.contactsDesc}>
						Если вы хотите что-то спросить, предложить работу или участие в проекте,
						то пишите
					</p>
					<CircleDecoration className={style.decorBlue} />
					<CircleDecoration className={style.decorRed} />

					<motion.form
						ref={formRef}
						onSubmit={handleSubmit}
						className={style.form}
						variants={slideUp}
					>
						<label htmlFor='name'>
							<motion.input
								className={style.input}
								type='text'
								name='name'
								id='name'
								value={form.name}
								onChange={handleChange}
								placeholder='Как вас зовут?'
								variants={slideUp}
								custom={1.2}
							/>
						</label>
						<label htmlFor=''>
							<motion.input
								className={style.input}
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder='Введите ваш email'
								variants={slideUp}
								custom={1.4}
							/>
						</label>
						<label htmlFor=''>
							<motion.textarea
								className={style.textarea}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Напишите что-нибудь...'
								rows='5'
								variants={slideUp}
								custom={1.6}
							/>
						</label>
						<div className={style.socialWrapper}>
							<div className={style.socialLinks}>
								<a
									href='https://github.com/Andy-Esm'
									target='_blank'
									rel='noreferrer'
								>
									<svg className={style.socialIcon}>
										<use href={`${icons}#github`} />
									</svg>
								</a>
								<a href='https://vk.com/andyesm' target='_blank' rel='noreferrer'>
									<svg className={style.socialIcon}>
										<use href={`${icons}#vk`} />
									</svg>
								</a>
								<a
									href='https://leetcode.com/Andy-Esm/'
									target='_blank'
									rel='noreferrer'
								>
									<svg className={style.socialIcon}>
										<use href={`${icons}#leetcode`} />
									</svg>
								</a>
							</div>
							<ButtonMain type='submit'>
								{loading ? 'Отправка...' : 'Отправить'}
							</ButtonMain>
						</div>
					</motion.form>
				</motion.div>
			</div>
		</motion.section>
	);
}

export default Contacts;
