import React from 'react';
import github from '../../assets/github.svg';
import leetcode from '../../assets/leetcode.svg';
import vk from '../../assets/vk.svg';
import {BgHeroCanvas, CircleDecoration, SpanText} from '../../components';

import style from './hero.module.css';
const Hero = () => {
	const name = 'Андрей'.split('');

	return (
		<section className={`${style.hero}  `}>
			<CircleDecoration className={style.decorRed} />
			<div className={style.wrapper}>
				<BgHeroCanvas />
				<div className={style.titleBlock}>
					<h1 className={style.title}>
						Привет
						<SpanText className={style.accentRed}>.</SpanText>
						<br />
						Меня зовут
						<br />
						<div className={style.accentGreen}>
							{name.map((letter, index) => {
								return <SpanText key={index}>{letter}</SpanText>;
							})}
						</div>
					</h1>
					<div className={style.social}>
						<a
							href="https://github.com/Andy-Esm"
							className={style.socialLink}
							target="_blank"
						>
							<img src={github} alt="ссылка на профиль github" />
						</a>
						<a
							href="https://vk.com/andyesm"
							className={style.socialLink}
							target="_blank"
						>
							<img src={vk} alt="ссылка на профиль vkontakte" />
						</a>
						<a
							href="https://leetcode.com/Andy-Esm/"
							className={style.socialLink}
							target="_blank"
						>
							<img src={leetcode} alt="ссылка на профиль leetcode" />
						</a>
					</div>
				</div>
			</div>
			<CircleDecoration className={style.decorBlue} />
		</section>
	);
};

export default Hero;
