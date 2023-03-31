import {motion} from 'framer-motion';
import React from 'react';
import myself from '../../assets/myself.jpg';
import {skills} from '../../constants';
import {slideDown, slideRight, textVariant} from '../../utils/motion';
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
					Немного обо мне<span className={style.titleAccent}>.</span>
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
					<div className={style.aboutText}>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.2)}
							custom={1}
						>
							Меня зовут <span className={style.accent}>Андрей</span> и я занимаюсь
							вёрсткой и Frontend разработкой на React.
						</motion.p>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.2)}
							custom={1.2}
						>
							Свои навыки я использую для создания интуитивно понятных, красивых
							интерфейсов. Я люблю работать в команде и придерживаюсь методологии
							Scrum для эффективной разработки проектов.
						</motion.p>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.2)}
							custom={1.4}
						>
							Моей любимой частью работы является создание анимаций и визуальной
							части сайта, которые помогают моим проектам выделяться на фоне других.
							Я убежден, что даже самые простые детали могут повысить удобство
							использования продукта, поэтому стараюсь улучшать пользовательский опыт
							во всех аспектах.
						</motion.p>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.2)}
							custom={1.6}
						>
							Я всегда готов к решению новых задач и не боюсь испытывать новые
							подходы. Если вы ищете React разработчика или верстальщика, который
							готов принять участие в увлекательных проектах, свяжитесь со мной, и я
							буду рад обсудить возможное сотрудничество!
						</motion.p>
						<motion.p
							className={style.aboutTextItem}
							variants={textVariant(0.2)}
							custom={1.8}
						>
							Возможно у меня не так много опыта как хотелось бы, но с каждой
							строчкой кода, с каждой css анимацией, с каждым небольшим проектом —
							я с огромным удовольствием погружаюсь в мир  информационных технологий.
						</motion.p>
						<motion.div
							className={style.skills}
							initial="hidden"
							viewport={{amount: 0.4, once: true}}
							whileInView="visible"
						>
							<h3 className={style.skillsTitle}>Некоторые навыки</h3>
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
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default AboutMe;
