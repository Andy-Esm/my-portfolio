import {motion} from 'framer-motion';
import React from 'react';
import icons from '../../assets/icons.svg';
import {CircleDecoration, SpanText} from '../../components';

import style from './hero.module.css';
const Hero = () => {
	const name = 'Андрей'.split('');

	return (
		<section className={`${style.hero}  `}>
			<div className="container">
				<div className={style.wrapper}>
					<CircleDecoration className={style.decorRed} />

					<motion.div
						className={style.titleBlock}
						initial={{opacity: 0, y: -20}}
						animate={{opacity: 1, y: 0}}
						transition={{
							delay: 0.3,
							duration: 0.5,
							ease: 'easeInOut',
						}}
					>
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
								<svg className={style.heroIcon}>
									<use href={icons + '#github'} />
								</svg>
							</a>
							<a
								href="https://vk.com/andyesm"
								className={style.socialLink}
								target="_blank"
							>
								<svg className={style.heroIcon}>
									<use href={icons + '#vk'} />
								</svg>
							</a>
							<a
								href="https://leetcode.com/Andy-Esm/"
								className={style.socialLink}
								target="_blank"
							>
								<svg className={style.heroIcon}>
									<use href={icons + '#leetcode'} />
								</svg>
							</a>
						</div>
					</motion.div>
					<CircleDecoration className={style.decorBlue} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
