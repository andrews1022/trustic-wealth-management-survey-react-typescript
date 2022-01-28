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
import { Option } from '../../../types/types';

const Results = () => {
	const formContext = useContext(FormContext);

	const wasSelected = (option: Option) =>
		formContext.formState.checkedOptions.indexOf(option.id) > -1 ? 'selected' : '';

	return (
		<S.Wrapper>
			<S.InnerWrapper>
				<S.HeroTextWrapper>
					<Heading element='h1' size='medium'>
						See how your answers align with other Canadians.
					</Heading>

					<Heading element='h2' size='small'>
						Download the complete survey results to get the full picture of what other Canadians
						selected, or get in touch to start planning.
					</Heading>

					<p>
						Below are the answers other Canadian&apos;s selected. The highlighted answers are the
						ones you also selected.
					</p>

					<S.SelectionsWrapper>
						<S.SelectionsBox />

						<p>= your selections</p>
					</S.SelectionsWrapper>
				</S.HeroTextWrapper>

				<S.Divider />

				<div className='results__answers'>
					<h3 className='results__answers-heading'>{titles[0].title}</h3>
					<ul className='results__answers-list'>
						{options
							.filter((option) => option.forQuestion === 1)
							.map((option) => (
								<li className='results__answers-item' key={option.id}>
									<span className={`results__answers-text ${wasSelected(option)}`}>
										{option.questionText}
									</span>
									<div
										className={`results__answers-percent-bar ${wasSelected(option)}`}
										style={{ width: `${option.percentAnswered}%` }}
									/>
								</li>
							))}
					</ul>
				</div>

				<S.Divider />

				<div className='results__answers'>
					<h3 className='results__answers-heading'>{titles[1].title}</h3>
					<ul className='results__answers-list'>
						{options
							.filter((option) => option.forQuestion === 2)
							.map((option) => (
								<li className='results__answers-item' key={option.id}>
									<span className={`results__answers-text ${wasSelected(option)}`}>
										{option.questionText}
									</span>
									<div
										className={`results__answers-percent-bar ${wasSelected(option)}`}
										style={{ width: `${option.percentAnswered}%` }}
									/>
								</li>
							))}
					</ul>
				</div>

				<S.Divider />

				<div className='results__answers'>
					<h3 className='results__answers-heading'>{titles[2].title}</h3>
					<ul className='results__answers-list'>
						{options
							.filter((option) => option.forQuestion === 3)
							.map((option) => (
								<li className='results__answers-item' key={option.id}>
									<span className={`results__answers-text ${wasSelected(option)}`}>
										{option.questionText}
									</span>
									<div
										className={`results__answers-percent-bar ${wasSelected(option)}`}
										style={{ width: `${option.percentAnswered}%` }}
									/>
								</li>
							))}
					</ul>
				</div>
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
