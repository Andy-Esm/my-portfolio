import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import React, {useRef, useState} from 'react';
import {InView} from 'react-intersection-observer';
import icons from '../../assets/icons.svg';
import {CircleDecoration} from '../../components';
import ButtonMain from '../../components/ButtonMain/ButtonMain';
import style from './contacts.module.css';

const Contacts = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setForm({...form, [name]: value});
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
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
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
				}
			);
	};

	const animation = {
		opacity: 0,
		y: 50,
		transition: {duration: 2, ease: 'easeInOut', delay: 1},
	};

	return (
		<section className={style.contacts}>
			<div className={style.formWrapper}>
				<h3 className={`${style.contactsTitle} title`}>
					Контакты<span className={style.accent}>.</span>
				</h3>
				<p className={style.contactsDesc}>
					Если вы хотите что-то спросить, предложить работу или участие в проекте, то
					пишите
				</p>
				<CircleDecoration className={style.decorBlue} />
				<CircleDecoration className={style.decorRed} />
				<InView>
					{({inView, ref}) => (
						<motion.div
							className={style.motionDiv}
							ref={ref}
							animate={inView ? {opacity: 1, y: 0} : animation}
						>
							<form ref={formRef} onSubmit={handleSubmit} className={style.form}>
								<label htmlFor="">
									<input
										className={style.input}
										type="text"
										name="name"
										value={form.name}
										onChange={handleChange}
										placeholder="Как вас зовут?"
									/>
								</label>
								<label htmlFor="">
									<input
										className={style.input}
										type="email"
										name="email"
										value={form.email}
										onChange={handleChange}
										placeholder="Введите ваш email"
									/>
								</label>
								<label htmlFor="">
									<textarea
										className={style.textarea}
										name="message"
										value={form.message}
										onChange={handleChange}
										placeholder="Напишите что-нибудь..."
										rows="5"
									></textarea>
								</label>
								<div className={style.socialWrapper}>
									<div className={style.socialLinks}>
										<a href="https://github.com/Andy-Esm" target="_blank">
											<svg className={style.socialIcon}>
												<use href={icons + '#github'} />
											</svg>
										</a>
										<a href="https://vk.com/andyesm" target="_blank">
											<svg className={style.socialIcon}>
												<use href={icons + '#vk'} />
											</svg>
										</a>
										<a href="https://leetcode.com/Andy-Esm/" target="_blank">
											<svg className={style.socialIcon}>
												<use href={icons + '#leetcode'} />
											</svg>
										</a>
									</div>
									<ButtonMain
										title={loading ? 'Отправка...' : 'Отправить'}
										type={'submit'}
									/>
								</div>
							</form>
						</motion.div>
					)}
				</InView>
			</div>
		</section>
	);
};

export default Contacts;
