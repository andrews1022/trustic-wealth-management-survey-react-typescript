import React, { useContext } from 'react';
import { motion } from 'framer-motion';

// context
import FormContext from '../../context/FormContext';

// components
import GraphSvg from '../GraphSvg';
import Intro from '../Intro';
import Nav from '../Nav';
import Question from '../Question';
import Results from '../Results';

// styled components
import * as S from './styles';

// animations
import { fadeInOut } from '../../animations/animations';

const MasterForm = () => {
	const formContext = useContext(FormContext);

	// destructure currentStep for cleaner jsx
	const { currentStep } = formContext.formState;

	return currentStep !== 4 ? (
		<S.Wrapper>
			<Nav />

			<S.InnerWrapper>
				<motion.div
					animate='show'
					exit='exit'
					initial='hidden'
					key={currentStep}
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
