import React from 'react';
import {BgHeroCanvas, CircleDecoration, SpanText} from '../../components';

import style from './hero.module.css';
const Hero = () => {
	const name = 'Андрей'.split('');

	return (
		<section className={`${style.hero} 'container'`}>
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
				</div>
			</div>
			<CircleDecoration className={style.decorBlue} />
		</section>
	);
};

export default Hero;
