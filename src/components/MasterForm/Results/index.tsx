import React, { useContext } from 'react';

// context
import FormContext from '../../../context/FormContext';

// components
import Button from '../../Button';
import Heading from '../../Heading';

// styles
import * as S from './styles';

// data
import options from '../../../data/options';
import titles from '../../../data/titles';

// types
// import { Option } from '../../../types/types';

const Results = () => {
	const formContext = useContext(FormContext);

	// const wasSelected = (option: Option) =>
	// 	formContext.formState.checkedOptions.indexOf(option.id) > -1 ? 'selected' : '';

	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.HeroTextWrapper>
					<Heading element='h1' size='large'>
						See how your answers align with other Canadians.
					</Heading>

					<Heading element='h2' size='medium'>
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

				<S.AnswersWrapper>
					<Heading element='h2' size='small'>
						{titles[1].title}
					</Heading>

					<S.AnswersList>
						{options
							.filter((option) => option.forQuestion === 1)
							.map((option) => (
								<S.AnswersItem key={option.id}>
									<S.AnswersText
										isSelected={formContext.formState.checkedOptions.indexOf(option.id) > -1}
									>
										{option.questionText}
									</S.AnswersText>

									<S.AnswersPercentageBar
										isSelected={formContext.formState.checkedOptions.indexOf(option.id) > -1}
										width={option.percentAnswered}
									/>
								</S.AnswersItem>
							))}
					</S.AnswersList>
				</S.AnswersWrapper>

				<S.Divider />

				<S.AnswersWrapper>
					<Heading element='h2' size='small'>
						{titles[2].title}
					</Heading>

					<S.AnswersList>
						{options
							.filter((option) => option.forQuestion === 2)
							.map((option) => (
								<S.AnswersItem key={option.id}>
									<S.AnswersText
										isSelected={formContext.formState.checkedOptions.indexOf(option.id) > -1}
									>
										{option.questionText}
									</S.AnswersText>

									<S.AnswersPercentageBar
										isSelected={formContext.formState.checkedOptions.indexOf(option.id) > -1}
										width={option.percentAnswered}
									/>
								</S.AnswersItem>
							))}
					</S.AnswersList>
				</S.AnswersWrapper>

				<S.Divider />

				<S.AnswersWrapper>
					<Heading element='h2' size='small'>
						{titles[3].title}
					</Heading>

					<S.AnswersList>
						{options
							.filter((option) => option.forQuestion === 3)
							.map((option) => (
								<S.AnswersItem key={option.id}>
									<S.AnswersText
										isSelected={formContext.formState.checkedOptions.indexOf(option.id) > -1}
									>
										{option.questionText}
									</S.AnswersText>

									<S.AnswersPercentageBar
										isSelected={formContext.formState.checkedOptions.indexOf(option.id) > -1}
										width={option.percentAnswered}
									/>
								</S.AnswersItem>
							))}
					</S.AnswersList>
				</S.AnswersWrapper>
			</S.InnerWrapper>

			<S.Divider />

			<S.RestartWrapper>
				<Heading element='h2' size='small'>
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

			{/* <Footer /> */}
		</S.Wrapper>
	);
};

export default Results;
