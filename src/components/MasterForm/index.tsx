import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Intro from '../Intro';
import Nav from '../Nav';
import Results from '../Results';

// styles
import * as S from './styles';

// svgs
import GraphSvg from '../GraphSvg';
import Question from '../Question';

const MasterForm = () => {
	const formContext = useContext(FormContext);

	return formContext.formState.currentStep !== 4 ? (
		<S.Wrapper>
			<Nav />

			<S.InnerWrapper>
				<Intro stepToRender={0} />
				<Question stepToRender={1} />
				<Question stepToRender={2} />
				<Question stepToRender={3} />

				<GraphSvg />
			</S.InnerWrapper>
		</S.Wrapper>
	) : (
		<Results />
	);
};

export default MasterForm;
