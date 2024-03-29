import { motion, useAnimationControls } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface SpanTextProps {
	children: ReactNode;
}

function SpanText({ children }: SpanTextProps) {
	const [isPlay, setIsPlay] = useState(false);
	const controls = useAnimationControls();
	const letterAnimation = () => {
		controls
			.start({
				transform: [
					'scale3d(1, 1.2, 1)',
					'scale3d(1.4, 0.55, 1)',
					'scale3d(0.75, 1.25, 1)',
					'scale3d(0.9, 1.05, 1)',
					'scale3d(1, 1, 1)',
				],
			})
			.then(() => {
				setIsPlay(!isPlay);
			});
	};

	return (
		<motion.span
			animate={controls}
			onMouseOver={() => {
				if (!isPlay) {
					letterAnimation();
				}
			}}
			onAnimationComplete={() => setIsPlay(!isPlay)}
		>
			{children}
		</motion.span>
	);
}

export default SpanText;
