import { ReactNode } from 'react';
import cls from 'classnames';
import style from './button-main.module.css';

interface ButtonMainProps {
	children: ReactNode;
	type: 'submit' | 'button';
	className?: string;
	onClick?: () => void;
}
function ButtonMain({ children, type, onClick, className }: ButtonMainProps) {
	return (
		<button type={type} className={cls(style.btnMain, className)} onClick={onClick}>
			{children}
		</button>
	);
}

export default ButtonMain;
