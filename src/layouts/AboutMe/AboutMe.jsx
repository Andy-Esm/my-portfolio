import React from 'react';
import myself from '../../assets/myself.jpg';
import styles from './about.module.css';
const AboutMe = () => {
	return (
		<section className={`${styles.aboutMe}  `}>
			<h2 className={`${styles.aboutTitle} title`}>
				Немного обо мне<span className={styles.titleAccent}>.</span>
			</h2>
			<div className={styles.wrapper}>
				<div className={styles.imgBox}>
					<img src={myself} alt="" className={styles.img} />
				</div>
				<div className={styles.aboutText}>
					<p className={styles.aboutTextItem}>
						Меня зовут <span className={styles.accent}>Андрей</span> и я занимаюсь
						вёрсткой и Frontend разработкой.
					</p>
					<p className={styles.aboutTextItem}>
						Я интеросовался веб-разработкой со времён когда сайты верстали
						на таблицах, а про фреймворки и блибиотеки вроде React, Vue,
						Angular, мало кто слышал, а каких-то не было вовсе.
					</p>
					<p className={styles.aboutTextItem}>
						На самом деле это и отпугивало меня все это время в какой-то степени.
						Но так или иначе я всегда что-то пробовал делать. От сайта и форума
						игрового сообщества, в котором состоял, до блогов на WordPress
						на различные темы. В общем так или иначе я крутился вокруг IT, но боялся
						подступится к нему в полной мере
					</p>
					<p className={styles.aboutTextItem}>
						Затем настала пандемия и после долгих раздумий и пары бесплатных
						марафонов, я твёрдо решил посвятить себя веб-разработке. Благо у меня
						что-то получалось и мне  это нравилось.
					</p>
					<p className={styles.aboutTextItem}>
						Возможно у меня не так много опыта как хотелось бы, но с каждой строчкой
						кода, с каждой css анимацией, с каждым небольшим проектом — я с огромным
						удовольтвием погружаюсь в мир  информационных технологий.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
