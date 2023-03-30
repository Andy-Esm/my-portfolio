import {motion} from 'framer-motion';
import React from 'react';
import icons from '../../assets/icons.svg';
import secretSanta from '../../assets/secret-santa.jpg';
import {experiences} from '../../constants';
import {slideLeft, slideRight, textVariant} from '../../utils/motion';
import style from './work.module.css';

const Work = () => {
	return (
		<motion.section
			className={style.work}
			initial="hidden"
			whileInView="visible"
			viewport={{amount: 0.4, once: true}}
			id="work"
		>
			<motion.h2
				className={`${style.workTitle} title`}
				variants={slideRight}
				custom={1}
			>
				Опыт работы<span className={style.redAccent}>.</span>
			</motion.h2>
			<div>
				{experiences.map((item) => (
					<div className={style.workWrapper} key={item.id}>
						<div className={style.workItem}>
							<motion.div className={style.workHeading} variants={textVariant(0.3)}>
								<h3 className={style.companyName}>{item.company}</h3>
								<span className={style.companyDate}>{item.date}</span>
								<span className={style.companyPosition}>{item.position}</span>

								<a
									href={item.linkToSite}
									target="_blank"
									rel="noreferrer"
									className={style.companyLink}
								>
									<svg className={style.companyLinkIcon}>
										<use href={icons + '#website-link'} />
									</svg>
								</a>
							</motion.div>

							<div className={style.workText}>
								<motion.p
									className={style.workParagraph}
									variants={slideRight}
									custom={1}
								>
									{item.description}
								</motion.p>
								<motion.p
									className={style.workParagraph}
									variants={slideRight}
									custom={1.2}
								>
									{' '}
									{item.points}
								</motion.p>
								<motion.div
									className={style.workSkills}
									variants={slideRight}
									custom={1.4}
								>
									{item.tech.map((el, idx) => {
										return (
											<>
												<span className={style.skillsItem} key={idx}>
													{el}
												</span>
											</>
										);
									})}
								</motion.div>
							</div>

							<motion.div className={style.workImgBox} variants={textVariant(0.3)}>
								<a
									href="https://secret-santa-1.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									<motion.img
										src={secretSanta}
										alt=""
										className={style.workImage}
										variants={slideLeft}
										custom={1.4}
									/>
								</a>
							</motion.div>
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default Work;
