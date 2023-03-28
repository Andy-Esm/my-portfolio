import React from 'react';
import style from './another-projects.module.css';
import {projects} from '../../constants';
import portfolio from '../../assets/portfolio-bg.jpg';
import icons from '../../assets/icons.svg';

const AnotherProjects = () => {
	return (
		<section className={style.projects}>
			<h2 className={`${style.projectsTitle} title`}>
				Другие проекты<span className={style.redAccent}>.</span>
			</h2>
			<div className={style.wrapper}>
				<div className={style.projectsList}>
					{projects.map((project) => (
						<div className={style.projectItem} key={project.id}>
							<div className={style.projectTextBox}>
								<h4 className={style.projectTitle}>{project.title}</h4>
								<p className={style.projectDescription}>{project.description}</p>
								<div className={style.projectTech}>
									{project.tech.map((el) => {
										return (
											<>
												<span className={style.skills}>{el}</span>
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
							</div>
							<img src={portfolio} alt="" className={style.projectImg} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AnotherProjects;
