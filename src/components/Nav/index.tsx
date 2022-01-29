import React from 'react';

// context

// components
import Button from '../Button';

// styles
import * as S from './styles';

const Nav = () => (
	<S.Nav>
		<S.List>
			<S.Item>
				<Button mode='pop' onClick={() => {}} size='small'>
					Book an introductory call
				</Button>
			</S.Item>

			<S.Item>
				<Button mode='pop' onClick={() => {}} size='small'>
					Sign up for future retirement insights
				</Button>
			</S.Item>
		</S.List>
	</S.Nav>
);

export default Nav;
