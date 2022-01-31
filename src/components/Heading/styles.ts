import styled from 'styled-components';

// theme
import theme from '../../styles/theme';

// types
import { HeadingSize } from '../../types/types';

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

export interface StyledHeadingProps {
	marginBottom: number;
	size: HeadingSize;
}

export const Heading = styled.div<StyledHeadingProps>`
	font-size: ${({ size }) => setHeadingFontSize(size)};
	line-height: 1.25;
	margin-bottom: ${({ marginBottom }) => marginBottom}%;

	@media ${(props) => props.theme.mediaQueries.tabletPortrait} {
		margin-bottom: ${({ marginBottom }) => marginBottom * 2}%;
	}
`;
