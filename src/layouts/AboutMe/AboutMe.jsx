import React from 'react';
import myself from '../../assets/myself.jpg';
import {skills} from '../../constants';
import style from './about.module.css';
const AboutMe = () => {
	return (
		<section className={`${style.aboutMe}  `}>
			<h2 className={`${style.aboutTitle} title`}>
				Немного обо мне<span className={style.titleAccent}>.</span>
			</h2>
			<div className={style.wrapper}>
				<div className={style.imgBox}>
					<img src={myself} alt="" className={style.img} />
				</div>
				<div className={style.aboutText}>
					<p className={style.aboutTextItem}>
						Меня зовут <span className={style.accent}>Андрей</span> и я занимаюсь
						вёрсткой и Frontend разработкой.
					</p>
					<p className={style.aboutTextItem}>
						Я интеросовался веб-разработкой со времён когда сайты верстали
						на таблицах, а про фреймворки и блибиотеки вроде React, Vue,
						Angular, мало кто слышал, а каких-то не было вовсе.
					</p>
					<p className={style.aboutTextItem}>
						На самом деле это и отпугивало меня все это время в какой-то степени.
						Но так или иначе я всегда что-то пробовал делать. От сайта и форума
						игрового сообщества, в котором состоял, до блогов на WordPress
						на различные темы. В общем так или иначе я крутился вокруг IT, но боялся
						подступится к нему в полной мере
					</p>
					<p className={style.aboutTextItem}>
						Затем настала пандемия и после долгих раздумий и пары бесплатных
						марафонов, я твёрдо решил посвятить себя веб-разработке. Благо у меня
						что-то получалось и мне  это нравилось.
					</p>
					<p className={style.aboutTextItem}>
						Возможно у меня не так много опыта как хотелось бы, но с каждой строчкой
						кода, с каждой css анимацией, с каждым небольшим проектом — я с огромным
						удовольcтвием погружаюсь в мир  информационных технологий.
					</p>
					<div className={style.skills}>
						<h3 className={style.skillsTitle}>Некоторые навыки</h3>
						<div className={style.skillsWrapper}>
							{skills.map((el) => {
								return (
									<>
										<span className={style.skillsItem}>{el}</span>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
