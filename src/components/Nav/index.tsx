import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

// components
import Button from '../Button';

// styles
import * as S from './styles';

const Nav = () => {
	const formContext = useContext(FormContext);

	return (
		<S.Nav>
			<S.List>
				<S.Item>
					<Button
						mode='pop'
						onClick={() => formContext.formDispatch({ type: 'OPEN_MODAL' })}
						size='small'
					>
						Book an introductory call
					</Button>
				</S.Item>

				<S.Item>
					<Button
						mode='pop'
						onClick={() => formContext.formDispatch({ type: 'OPEN_MODAL' })}
						size='small'
					>
						Sign up for future retirement insights
					</Button>
				</S.Item>
			</S.List>
		</S.Nav>
	);
};

export default Nav;
