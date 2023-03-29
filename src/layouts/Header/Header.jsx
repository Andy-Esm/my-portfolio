import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/Logo.svg';
import {Menu} from '../../components';
import style from './heder.module.css';

const Header = () => {
	const [active, setActive] = useState('');

	return (
		<header className={style.header}>
			<Link
				to="/"
				className={style.navLink}
				onClick={() => {
					setActive('');
					window.scrollTo(0, 0);
				}}
			>
				<img src={logo} alt="Andrey Esman logo" />
			</Link>

			<div className={style.menuWrapper}>
				<Menu />
				<a
					className={style.btnMain}
					href="../../../public/resume.pdf"
					target="_blank"
				>
					Резюме
				</a>
			</div>
		</header>
	);
};

export default Header;
