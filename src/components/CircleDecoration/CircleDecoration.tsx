import { motion, useAnimationControls } from 'framer-motion';

type CircleDecorationProps = {
	className: string;
};

function CircleDecoration({ className }: CircleDecorationProps) {
	const controls = useAnimationControls();
	const circleAnimation = () => {
		controls.start({
			transform: [
				'scale(1.2)',
				'scale(1.5)',
				'scale(1.7)',
				'rotateZ(0deg)',
				'rotateZ(90deg)',
				'rotateZ(180deg)',
				'rotateZ(90deg)',
				'rotateZ(0deg)',
				'scale(1)',
			],

			transition: {
				duration: 1.2,
			},
		});
	};

	return (
		<motion.div
			animate={controls}
			onMouseOver={() => {
				circleAnimation();
			}}
			className={className}
		/>
	);
}

export default CircleDecoration;
