import React from 'react';
import style from './button-main.module.css';
const ButtonMain = ({title, type}) => {
	return (
		<button type={type} className={style.btnMain}>
			{title}
		</button>
	);
};

export default ButtonMain;
