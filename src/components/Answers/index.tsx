import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Heading from '../Heading';

// styles
import * as S from './styles';

// data
import options from '../../data/options';
import titles from '../../data/titles';

type AnswersProps = {
	index: number;
};

const Answers = ({ index }: AnswersProps) => {
	const formContext = useContext(FormContext);

	const isSelected = (id: string) => formContext.formState.checkedOptions.indexOf(id) > -1;

	return (
		<>
			<S.Wrapper>
				<Heading element='h2' marginBottom={2} size='small'>
					{titles[index].title}
				</Heading>

				<S.List>
					{options
						.filter((option) => option.forQuestion === index)
						.map((option) => (
							<S.Item key={option.id}>
								<S.Text isSelected={isSelected(option.id)}>{option.questionText}</S.Text>

								<S.PercentageBar
									isSelected={isSelected(option.id)}
									width={option.percentAnswered}
								/>
							</S.Item>
						))}
				</S.List>
			</S.Wrapper>

			<S.Divider />
		</>
	);
};

export default Answers;
