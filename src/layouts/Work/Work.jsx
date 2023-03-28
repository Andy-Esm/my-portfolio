import React from 'react';
import style from './work.module.css';
import icons from '../../assets/icons.svg';
import secrtSanta from '../../assets/secret-santa.jpg';

const Work = () => {
	return (
		<section className={style.work}>
			<h2 className={`${style.workTitle} title`}>Опыт работы</h2>
			<div className={style.workWrapper}>
				<div className={style.workItem}>
					<div className={style.workHeading}>
						<h3 className={style.companyName}>Secret Santa</h3>
						<span className={style.companyDate}>Ноябрь 2022</span>
						<span className={style.companyPosition}>Frontend Developer</span>
						<div className={style.companyLinks}>
							<a
								href="https://secret-santa-1.netlify.app/"
								target="_blank"
								rel="noreferrer"
								className={style.companyLink}
							>
								<svg className={style.companyLinkIcon}>
									<use href={icons + '#website-link'} />
								</svg>
							</a>
						</div>
					</div>

					<div className={style.workText}>
						<p className={style.workParagraph}>
							Работа в небольшом стартапе над созданием проекта{' '}
							<span className={style.accent}>Secret Santa</span> предназначенного для
							проведения тайных жеребьёвок с вручением подарков. Участвовал в проекте
							в качестве fronted-разработчика.
						</p>
						<p className={style.workParagraph}>
							<span className={style.accent}>В обязанности входило:</span> Создание
							компонентов разной сложности Работа Rest API - отправка запросов на
							сервер, получение данных и их обработка с последующей отрисовкой на
							странице,валидация форм, CSS анимация для интерактивных элементов.
						</p>
					</div>

					<div className={style.workImgBox}>
						<a
							href="https://secret-santa-1.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={secrtSanta} alt="" className={style.workImage} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
