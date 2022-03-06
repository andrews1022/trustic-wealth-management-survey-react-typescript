import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    height: auto;
  }
`;

export const InnerWrapper = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 52.5%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;

  @media ${({ theme }) => theme.mediaQueries.tabletLandscape} {
    flex-direction: column-reverse;
    padding: 0 7.5% 7.5% 7.5%;
    position: static;
    transform: translate(0, 0);
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.mobileMedium} {
    padding: 0 5% 7.5% 5%;
  }
`;
