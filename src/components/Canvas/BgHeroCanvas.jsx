import {Canvas} from '@react-three/fiber';
import React from 'react';
import Blob from './Blob';
import style from './canvas.module.css';
const BgHeroCanvas = () => {
	return (
		<div className={style.canvasWrapper}>
			<Canvas camera={{position: [0.0, 0.0, 0.9]}} className={style.canvas}>
				<Blob />
			</Canvas>
		</div>
	);
};

export default BgHeroCanvas;
