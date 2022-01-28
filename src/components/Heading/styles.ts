import styled from 'styled-components';

import theme from '../../styles/theme';

// types
import { HeadingSize } from '../../types/types';

type HeadingProps = {
	size: HeadingSize;
};

const setHeadingFontSize = (size: HeadingSize): string => {
	switch (size) {
		case 'small': {
			return theme.fontSizes.small;
		}

		case 'medium': {
			return theme.fontSizes.medium;
		}

		case 'large': {
			return theme.fontSizes.large;
		}

		default: {
			return theme.fontSizes.medium;
		}
	}
};

const HeadingStyles = styled.div<HeadingProps>`
	font-size: ${({ size }) => setHeadingFontSize(size)};
`;

export default HeadingStyles;
