import styled from 'styled-components';

export const Wrapper = styled.div`
  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    margin-bottom: 7.5%;
  }
`;

export const InnerWrapper = styled.div`
  padding: 4.25% 5%;

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    padding: 4.25% 7.5% 0 7.5%;
  }
`;

export const HeroTextWrapper = styled.header`
  text-align: center;
`;

export const SelectionsWrapper = styled.div`
  margin: 0 auto;
  width: 37.5%;

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQueries.tabletMedium} {
    width: 75%;
  }

  @media ${({ theme }) => theme.mediaQueries.tabletPortrait} {
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.colors.lochmara};
  }
`;

export const SelectionsInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3%;

  @media ${({ theme }) => theme.mediaQueries.mobileLarge} {
    margin-bottom: 3%;
  }

  p {
    color: ${({ theme }) => theme.colors.supernova};
    font-size: 1.125rem;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`;

export const SelectionsBox = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  background-color: ${({ theme }) => theme.colors.supernova};
  margin-right: 0.25rem;
`;

export const RestartWrapper = styled.div`
  text-align: center;
`;
