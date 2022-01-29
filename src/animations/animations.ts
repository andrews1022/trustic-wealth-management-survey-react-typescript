export const fadeInOut = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 1,
			ease: 'easeInOut'
		}
	}
};

export const widthAnim = (percent: number) => ({
	hidden: {
		width: 0
	},
	show: {
		width: `${percent}%`,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			staggerChildren: 0.5
		}
	}
});
