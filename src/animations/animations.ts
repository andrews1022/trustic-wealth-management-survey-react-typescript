const fadeInOut = {
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

export default fadeInOut;
