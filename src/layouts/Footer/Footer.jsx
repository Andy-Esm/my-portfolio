import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span className={styles.copyright}>
				Дизайн и разработка{' '}
				<a href="/" className={styles.footerLink}>
					&copy; Андрей Есьман{' '}
				</a>
				2023г.
			</span>
		</footer>
	);
};

export default Footer;
