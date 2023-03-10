import {Canvas} from '@react-three/fiber';
import React from 'react';
import Blob from './Blob';
const BgHeroCanvas = () => {
	return (
		<div>
			<Canvas camera={{position: [0.0, 0.0, 0.9]}}>
				<Blob />
			</Canvas>
		</div>
	);
};

export default BgHeroCanvas;
