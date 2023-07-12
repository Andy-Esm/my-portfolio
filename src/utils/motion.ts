const slideUp = {
	hidden: {
		y: 100,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.2,
			duration: 0.5 * custom,
		},
	}),
};

const slideDown = {
	hidden: {
		y: -50,
		opacity: 0,
	},
	visible: (custom) => ({
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.43, 0.13, 0.23, 0.96],
			delay: 0.3 * custom,
		},
	}),
};

const slideRight = {
	hidden: { x: -100, opacity: 0 },
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			type: 'spring',
			delay: 0.3 * custom,
		},
	}),
};
const slideLeft = {
	hidden: { x: 100, opacity: 0 },
	visible: (custom) => ({
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			bounce: 0.5,
			ease: [0.43, 0.13, 0.23, 0.96],
			delay: 0.3 * custom,
		},
	}),
};

const slideLeftHover = {
	hidden: { right: -100, opacity: 0 },
	visible: (custom) => ({
		right: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.43, 0.13, 0.23, 0.96],
			delay: custom,
		},
	}),
};

const textVariant = (delay) => {
	return {
		hidden: {
			opacity: 0,
		},
		visible: (custom) => ({
			opacity: 1,
			transition: {
				ease: [0.43, 0.13, 0.23, 0.96],
				duration: 1.25,
				delay: delay * custom,
			},
		}),
	};
};

const zoomIn = (delay, duration) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'tween',
				delay,
				duration,
				ease: [0.43, 0.13, 0.23, 0.96],
			},
		},
	};
};

export {
	slideUp,
	slideRight,
	textVariant,
	zoomIn,
	slideDown,
	slideLeft,
	slideLeftHover,
};
