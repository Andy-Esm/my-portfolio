import {motion} from 'framer-motion';
import React, {useState} from 'react';
import icons from '../../assets/icons.svg';
import {CircleDecoration, Cursor, SpanText} from '../../components';
import {slideLeft, slideUp, textVariant} from '../../utils/motion';
import style from './hero.module.css';

const Hero = () => {
	const name = 'Андрей'.split('');
	const [isHover, setIsHover] = useState('default');

	const textEnter = () => {
		setIsHover('hover');
	};
	const textLeave = () => {
		setIsHover('default');
	};

	return (
		<motion.section
			className={`${style.hero}  `}
			initial="hidden"
			viewport={{amount: 0.4, once: true}}
			whileInView="visible"
		>
			<Cursor cursorEvent={isHover} />
			<div className="container">
				<div className={style.wrapper}>
					<CircleDecoration className={style.decorRed} />
					<motion.div
						className={style.textBlock}
						variants={textVariant(0.3)}
						onMouseEnter={textEnter}
						onMouseLeave={textLeave}
					>
						<span className={style.subtitle}>Frontend</span>
						<span className={style.subtitle}>Верстка</span>
						<span className={style.subtitle}>React</span>
						<span className={style.subtitle}>JavaScript</span>
					</motion.div>
					<div className={style.titleBlock}>
						<motion.h1 className={style.title} variants={slideLeft}>
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
						</motion.h1>
						<motion.div className={style.social} variants={slideUp}>
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
						</motion.div>
					</div>
					<CircleDecoration className={style.decorBlue} />
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
