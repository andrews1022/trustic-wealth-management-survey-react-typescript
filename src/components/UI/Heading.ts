import styled from 'styled-components';
import theme from '../../styles/theme';

type HeadingSize = 'small' | 'medium' | 'large';

type HeadingProps = {
  marginBottom: number;
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

// NOTE: make sure to use the as='' prop for dynamic heading elements!
export const Heading = styled.div<HeadingProps>`
  font-size: ${({ size }) => setHeadingFontSize(size)};
  line-height: 1.25;
  margin-bottom: ${({ marginBottom }) => marginBottom}%;

  @media ${(props) => props.theme.mediaQueries.tabletPortrait} {
    margin-bottom: ${({ marginBottom }) => marginBottom * 2}%;
  }
`;
