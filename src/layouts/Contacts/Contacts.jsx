import {motion} from 'framer-motion';
import React, {useRef, useState} from 'react';
import github from '../../assets/github.svg';
import leetcode from '../../assets/leetcode.svg';
import vk from '../../assets/vk.svg';
import ButtonMain from '../../components/ButtonMain/ButtonMain';
import {slideIn} from '../../utils/motion';
import styles from './contacts.module.css';
import emailjs from '@emailjs/browser'

const Contacts = () => {
	const forRef = useRef();
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
        to_name: "Andrey Esman",
        from_email: form.email,
        to_email: "andreyesman.md@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        alert("Спасибо, что написали мне. Я постараюсь ответить как можно скорее");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Упс! Что-то пошло не так. Попробуйте еще раз");
      }
    );

	};

	return (
		<section className={styles.contacts}>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className={styles.formWrapper}
			>
				<h3 className={`${styles.contactsTitle} title`}>
					Контакты<span className={styles.accent}>.</span>
				</h3>
				<p className={styles.contactsDesc}>
					Если вы хотите что-то спросить, предложить работу или участие в проекте, то
					пишите
				</p>
				<form ref={forRef} onSubmit={handleSubmit} className={styles.form}>
					<label htmlFor="">
						<input
							className={styles.input}
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Как вас зовут?"
						/>
					</label>
					<label htmlFor="">
						<input
							className={styles.input}
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Введите ваш email"
						/>
					</label>
					<label htmlFor="">
						<textarea
							className={styles.textarea}

							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="Напишите что-нибудь..."
							rows="5"
						></textarea>
					</label>
					<div className={styles.socialWrapper}>
						<div className={styles.socialLinks}>
							<a href="https://github.com/Andy-Esm" target="_blank">
								<img src={github} alt="иконка github " />
							</a>
							<a href="https://vk.com/andyesm" target="_blank">
								<img src={vk} alt="иконка вконтакте " />
							</a>
							<a href="https://leetcode.com/Andy-Esm/" target="_blank">
								<img src={leetcode} alt="иконка leetcode" />
							</a>
						</div>
						<ButtonMain title={loading ? 'Отправка...' : 'Отправить'}   type={'submit'} />
					</div>
				</form>
			</motion.div>
		</section>
	);
};

export default Contacts;
