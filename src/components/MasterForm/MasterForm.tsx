import { motion } from 'framer-motion';

// components
import GraphSvg from '../GraphSvg/GraphSvg';
import Intro from '../Intro/Intro';
import Nav from '../Nav/Nav';
import Question from '../Question/Question';
import Results from '../Results/Results';

// custom hooks
import useForm from '../../hooks/useForm';

// styled components
import * as S from './MasterForm.styles';

// animations
import { fadeInOut } from '../../animations/animations';

const MasterForm = () => {
  const [state] = useForm();

  return state.currentStep !== 4 ? (
    <S.Wrapper>
      <Nav />

      <S.InnerWrapper>
        <motion.div
          animate='show'
          exit='exit'
          initial='hidden'
          key={state.currentStep}
          variants={fadeInOut}
        >
          <Intro stepToRender={0} />
          <Question stepToRender={1} />
          <Question stepToRender={2} />
          <Question stepToRender={3} />
        </motion.div>

        <GraphSvg />
      </S.InnerWrapper>
    </S.Wrapper>
  ) : (
    <Results />
  );
};

export default MasterForm;
