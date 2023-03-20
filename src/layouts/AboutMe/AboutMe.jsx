import React from 'react';
import myself from '../../assets/myself.jpg';
import style from './about.module.css';
const AboutMe = () => {
	return (
		<section className={`${style.aboutMe}  `}>
			<h2 className={`${style.aboutTitle} title`}>Немного обо мне</h2>
			<div className={style.wrapper}>
				<div className={style.imgBox}>
					<img src={myself} alt="" className={style.img} />
				</div>
				<div className={style.aboutText}>
					<p className={style.aboutTextItem}>
						Меня зовут <span className={style.accent}>Андрей</span> и я занимаюсь
						вёрсткой и Frontend разработкой. Я интеросовался веб-разработкой
						со времён когда сайты верстали на таблицах, а про фреймворки и блибиотеки
						вроде React, Vue, Angular, мало кто слышал, а каких-то не было вовсе.
						На самом деле это и отпугивало меня все это время в какой-то степени.
						Но так или иначе я всегда что-то пробовал делать. От сайта и форума
						игрового сообщества, в котором состоял, до блогов на WordPress
						на различные темы. В общем так или иначе я крутился вокруг IT, но боялся
						подступится к нему в полной мере Затем настала пандемия и после долгих
						раздумий и пары бесплатных марафонов, я твёрдо решил посвятить себя
						веб-разработке. Благо у меня что-то получалось и мне  это нравилось.
						Сейчас я ещё в начале своего пути, но с каждой строчкой кода, с каждой
						css анимацией, с каждым небольшим проектом — я с огромным удовольтвием
						погружаюсь в мир  информационных технологий.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
