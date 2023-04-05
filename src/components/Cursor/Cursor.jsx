import React, {useState, useEffect} from 'react';
import style from './cursor.module.css';
import {motion} from 'framer-motion';

const Cursor = ({cursorEvent}) => {
	const [position, setPosition] = useState({x: 0, y: 0});

	useEffect(() => {
		const onMouseMove = (e) => {
			setPosition({x: e.clientX, y: e.clientY});
		};
		window.addEventListener('mousemove', onMouseMove);
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	useEffect(() => {
		if (cursorEvent === 'hover') {
			setPosition({x: position.x, y: position.y});
		}
	}, [cursorEvent]);

	const mouseCursor = {
		default: {
			x: position.x - 12,
			y: position.y - 12,
		},
		hover: {
			height: 150,
			width: 150,
			x: position.x - 75,
			y: position.y - 75,
			backgroundColor: '#ccd7f7',
			mixBlendMode: 'difference',
		},
	};

	return (
		<div className={style.cursorContainer}>
			<motion.div
				className={style.cursor}
				variants={mouseCursor}
				initial="default"
				animate={cursorEvent}
			></motion.div>
		</div>
	);
};

export default Cursor;
