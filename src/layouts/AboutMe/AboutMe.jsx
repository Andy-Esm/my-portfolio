import {motion} from 'framer-motion';
import React from 'react';
import myself from '../../assets/myself.jpg';
import {skills} from '../../constants';
import {slideDown, slideLeft, slideRight, textVariant} from '../../utils/motion';
import style from './about.module.css';
const AboutMe = () => {
	return (
		<motion.section
			className={`${style.aboutMe}  `}
			initial="hidden"
			viewport={{amount: 0.4, once: true}}
			whileInView="visible"
			id="about"
		>
			<div className="container">
				<motion.h2 className={`${style.aboutTitle} title`} variants={slideDown}>
					Немного о себе<span className={style.titleAccent}>.</span>
				</motion.h2>
				<div className={style.wrapper}>
					<motion.div className={style.imgBox} variants={textVariant(0.4)}>
						<motion.img
							src={myself}
							alt=""
							className={style.img}
							variants={slideRight}
							custom={1.3}
						/>
					</motion.div>
					<motion.div className={style.aboutText} variants={slideLeft}>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.4)}
							custom={1}
						>
							Меня зовут <span className={style.accent}>Андрей</span> и я занимаюсь
							вёрсткой и Frontend разработкой на React.
						</motion.p>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.4)}
							custom={1.2}
						>
							Свои навыки я&nbsp;использую для создания интуитивно понятных, красивых
							интерфейсов. Я&nbsp;люблю работать в&nbsp;команде и&nbsp;придерживаюсь
							методологии Scrum для эффективной разработки проектов.
						</motion.p>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.4)}
							custom={1.4}
						>
							Моей любимой частью работы является создание анимаций и&nbsp;визуальной
							части сайта, которые помогают моим проектам выделяться на&nbsp;фоне
							других. Я&nbsp;убежден, что даже самые простые детали могут повысить
							удобство использования продукта, поэтому стараюсь улучшать
							пользовательский опыт во&nbsp;всех аспектах.
						</motion.p>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.4)}
							custom={1.6}
						>
							Я&nbsp;всегда готов к&nbsp;решению новых задач и&nbsp;не&nbsp;боюсь
							испытывать новые подходы. Если вы&nbsp;ищете React разработчика или
							верстальщика, который готов принять участие в&nbsp;увлекательных
							проектах, свяжитесь со&nbsp;мной, и&nbsp;я буду рад обсудить возможное
							сотрудничество!
						</motion.p>

						<motion.div
							className={style.skills}
							initial="hidden"
							viewport={{amount: 0.6, once: true}}
							whileInView="visible"
						>
							<motion.h3 className={style.skillsTitle} variants={textVariant(0.5)}>
								Некоторые навыки
							</motion.h3>
							<motion.div
								className={style.skillsWrapper}
								variants={textVariant(0.4)}
								custom={1}
							>
								{skills.map((el) => {
									return (
										<>
											<span className={style.skillsItem}>{el}</span>
										</>
									);
								})}
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default AboutMe;
