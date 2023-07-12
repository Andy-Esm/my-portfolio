import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import { Menu } from '../../components';
import style from './heder.module.css';

function Header() {
	const [active, setActive] = useState(false);

	return (
		<header className={style.header}>
			<div className='container'>
				<div className={style.headerWrapper}>
					<Link
						to='/'
						onClick={() => {
							setActive(!active);
							window.scrollTo(0, 0);
						}}
					>
						<img src={logo} alt='Andrey Esman logo' />
					</Link>

					<div className={style.menuWrapper}>
						<Menu />
						<a className={style.btnMain} href='./resume.pdf' target='_blank'>
							Резюме
						</a>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
