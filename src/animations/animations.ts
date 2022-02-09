const ANIMATION_DURATION = 0.5;
const ANIMATION_EASE = 'easeInOut';

const transition = {
	duration: ANIMATION_DURATION,
	ease: ANIMATION_EASE
};

export const fadeInOut = {
	hidden: {
		...transition,
		opacity: 0
	},
	show: {
		...transition,
		opacity: 1
	},
	exit: {
		...transition,
		opacity: 0
	}
};

export const widthAnim = (percent: number) => ({
	hidden: {
		...transition,
		width: 0
	},
	show: {
		...transition,
		width: `${percent}%`
	}
});
