import { motion } from 'framer-motion';
import icons from '../../assets/icons.svg';
import { CircleDecoration, SpanText } from '../../components';
import { slideLeft, slideUp, textVariant } from '../../utils/motion';
import style from './hero.module.css';

function Hero() {
	const name = 'Андрей'.split('');

	return (
		<motion.section
			className={`${style.hero}  `}
			initial='hidden'
			viewport={{ amount: 0.4, once: true }}
			whileInView='visible'
		>
			<div className='container'>
				<div className={style.wrapper}>
					<CircleDecoration className={style.decorRed} />
					<motion.div className={style.textBlock} variants={textVariant(0.3)}>
						<span>Frontend</span>
						<span>Верстка</span>
						<span>React</span>
						<span>JavaScript</span>
					</motion.div>
					<div className={style.titleBlock}>
						<motion.h1 className={style.title} variants={slideLeft}>
							Привет
							<SpanText className={style.accentRed}>.</SpanText>
							<br />
							Меня зовут
							<br />
							<div className={style.accentGreen}>
								{name.map((letter, index) => (
									<SpanText key={index}>{letter}</SpanText>
								))}
							</div>
						</motion.h1>
						<motion.div className={style.social} variants={slideUp}>
							<a
								href='https://github.com/Andy-Esm'
								className={style.socialLink}
								target='_blank'
								rel='noreferrer'
							>
								<svg className={style.heroIcon}>
									<use href={`${icons}#github`} />
								</svg>
							</a>
							<a
								href='https://vk.com/andyesm'
								className={style.socialLink}
								target='_blank'
								rel='noreferrer'
							>
								<svg className={style.heroIcon}>
									<use href={`${icons}#vk`} />
								</svg>
							</a>
							<a
								href='https://leetcode.com/Andy-Esm/'
								className={style.socialLink}
								target='_blank'
								rel='noreferrer'
							>
								<svg className={style.heroIcon}>
									<use href={`${icons}#leetcode`} />
								</svg>
							</a>
						</motion.div>
					</div>
					<CircleDecoration className={style.decorBlue} />
				</div>
			</div>
		</motion.section>
	);
}

export default Hero;
