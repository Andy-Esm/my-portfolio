import React from 'react';
import style from './button-main.module.css';
const ButtonMain = ({title}) => {
	return (
		<button type="button" className={style.btnMain}>
			{title}
		</button>
	);
};

export default ButtonMain;
