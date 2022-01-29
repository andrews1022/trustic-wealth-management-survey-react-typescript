import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Answers from '../Answers';
import Button from '../Button';
import Heading from '../Heading';

// styles
import * as S from './styles';

const Results = () => {
	const formContext = useContext(FormContext);

	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.HeroTextWrapper>
					<Heading element='h1' marginBottom={2} size='large'>
						See how your answers align with other Canadians.
					</Heading>

					<Heading element='h2' marginBottom={2} size='medium'>
						Download the complete survey results to get the full picture of what other Canadians
						selected, or get in touch to start planning.
					</Heading>

					<S.SelectionsWrapper>
						<p>
							Below are the answers other Canadian&apos;s selected. The highlighted answers are the
							ones you also selected.
						</p>

						<S.SelectionsInnerWrapper>
							<S.SelectionsBox />

							<p>= your selections</p>
						</S.SelectionsInnerWrapper>
					</S.SelectionsWrapper>
				</S.HeroTextWrapper>

				<S.Divider />

				<Answers index={1} />
				<Answers index={2} />
				<Answers index={3} />

				<S.RestartWrapper>
					<Heading element='h2' marginBottom={2} size='small'>
						Would you like to take the survey again?
					</Heading>

					<Button
						mode='hollow'
						onClick={() => formContext.formDispatch({ type: 'RESTART_SURVEY' })}
						size='large'
					>
						Take Survey Again
					</Button>
				</S.RestartWrapper>
			</S.InnerWrapper>

			{/* <Footer /> */}
		</S.Wrapper>
	);
};

export default Results;
