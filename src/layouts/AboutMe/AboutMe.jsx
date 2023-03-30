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
						вёрсткой и Frontend разработкой на React.
					</p>
					<p className={style.aboutTextItem}>
						Свои навыки я использую для создания интуитивно понятных, красивых
						интерфейсов. Я люблю работать в команде и придерживаюсь методологии Scrum
						для эффективной разработки проектов.
					</p>
					<p className={style.aboutTextItem}>
						Моей любимой частью работы является создание анимаций и визуальной части
						сайта, которые помогают моим проектам выделяться на фоне других. Я
						убежден, что даже самые простые детали могут повысить удобство
						использования продукта, поэтому стараюсь улучшать пользовательский опыт
						во всех аспектах.
					</p>
					<p className={style.aboutTextItem}>
						Я всегда готов к решению новых задач и не боюсь испытывать новые подходы.
						Если вы ищете React разработчика или верстальщика, который готов принять
						участие в увлекательных проектах, свяжитесь со мной, и я буду рад
						обсудить возможное сотрудничество!
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
