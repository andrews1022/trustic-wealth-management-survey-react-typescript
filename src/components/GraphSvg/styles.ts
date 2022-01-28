import styled from 'styled-components';

// theme
import theme from '../../styles/theme';

const setBarFillColor = (currentStep: number) => {
	switch (currentStep) {
		case 0: {
			return theme.colors.purpleHeart;
		}

		case 1: {
			return theme.colors.niagara;
		}

		case 2: {
			return theme.colors.supernova;
		}

		case 3: {
			return theme.colors.gulfBlue;
		}

		default: {
			return theme.colors.purpleHeart;
		}
	}
};

type BarProps = {
	currentStep: number;
};

export const Bar = styled.rect<BarProps>`
	fill: ${(props) => setBarFillColor(props.currentStep)};
	transition: fill 250ms ease-in-out;
`;

export const GraphSvg = styled.svg`
	flex: 0 0 50%;
`;
