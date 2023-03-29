import React from 'react';
import icons from '../../assets/icons.svg';
import secretSanta from '../../assets/secret-santa.jpg';
import {experiences} from '../../constants';
import style from './work.module.css';

const Work = () => {
	return (
		<section className={style.work}>
			<h2 className={`${style.workTitle} title`}>
				Опыт работы<span className={style.redAccent}>.</span>
			</h2>
			{experiences.map((item) => (
				<div className={style.workWrapper} key={item.id}>
					<div className={style.workItem}>
						<div className={style.workHeading}>
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
						</div>

						<div className={style.workText}>
							<p className={style.workParagraph}>{item.description}</p>
							<p className={style.workParagraph}> {item.points}</p>
							<div className={style.workSkills}>
								{item.tech.map((el) => {
									return (
										<>
											<span className={style.skillsItem}>{el}</span>
										</>
									);
								})}
							</div>
						</div>

						<div className={style.workImgBox}>
							<a
								href="https://secret-santa-1.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={secretSanta} alt="" className={style.workImage} />
							</a>
						</div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Work;
