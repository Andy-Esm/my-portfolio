import {motion} from 'framer-motion';
import React from 'react';
import icons from '../../assets/icons.svg';
import {projects} from '../../constants';
import {slideLeft, slideUp} from '../../utils/motion';
import style from './another-projects.module.css';

const AnotherProjects = () => {
	return (
		<motion.section
			className={style.projects}
			initial="hidden"
			whileInView="visible"
			viewport={{amount: 0.4, once: true}}
			id="projects"
		>
			<div className="container">
				<motion.h2 className={`${style.projectsTitle} title`} variants={slideLeft}>
					Другие проекты<span className={style.redAccent}>.</span>
				</motion.h2>
				<div className={style.wrapper}>
					<ul className={style.projectsList}>
						{projects.map((project) => (
							<motion.li
								className={style.projectItem}
								key={project.id}
								variants={slideUp}
								custom={project.id - 0.9}
								whileHover={{scale: 1.05}}
								whileTap={{scale: 0.95}}
								transition={{duration: 0.2}}
							>
								<h4 className={style.projectTitle}>{project.title}</h4>
								<p className={style.projectDescription}>{project.description}</p>
								<div className={style.projectTech}>
									{project.tech.map((el, idx) => {
										return (
											<>
												<span className={style.skills} key={idx}>
													{el}
												</span>
											</>
										);
									})}
								</div>
								<div className={style.projectLinksBox}>
									<a
										href={project.linkToGithub}
										target="_blank"
										rel="noreferrer"
										className={style.projectLink}
									>
										<svg className={style.projectIcon}>
											<use href={icons + '#github'} />
										</svg>
									</a>
									<a
										href={project.linkToSite}
										target="_blank"
										rel="noreferrer"
										className={style.projectLink}
									>
										<svg className={style.projectIcon}>
											<use href={icons + '#website-link'} />
										</svg>
									</a>
								</div>
							</motion.li>
						))}
					</ul>
				</div>
			</div>
		</motion.section>
	);
};

export default AnotherProjects;
