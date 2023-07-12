import React, { useState } from 'react';
import { MENU_LINKS } from '../../constants';
import style from './menu.module.css';

function Menu() {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(true);

	return (
		<nav>
			<ul className={style.navList}>
				{MENU_LINKS.map((link) => (
					<li key={link.id}>
						<a
							href={`#${link.id}`}
							className={`${style.navLink} ${
								active === link.title ? style.active : ''
							}`}
							onClick={() => setActive(link.title)}
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>

			<div className={style.mobileWrapper}>
				<button type='button' onClick={() => setToggle(!toggle)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 30 30'
						width='30px'
						height='30px'
						className={style.burgerIcon}
					>
						<path d='M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z' />
					</svg>
				</button>
				<div className={`${!toggle ? 'hidden' : 'flex'} ${style.mobileNav}`}>
					<ul className={style.navListMobile}>
						{MENU_LINKS.map((link) => (
							<li key={link.id}>
								<a
									href={`#${link.id}`}
									className={`${style.navLink} ${
										active === link.title ? style.active : ''
									}`}
									onClick={() => {
										setActive(link.title);
										setToggle(!toggle);
									}}
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Menu;
