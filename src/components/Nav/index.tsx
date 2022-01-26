import React, { useContext } from 'react';

// context
import FormContext from '../../context/FormContext';

const Nav = () => {
	const formContext = useContext(FormContext);

	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__item'>
					<button onClick={() => {}} type='button'>
						Book an introductory call
					</button>
				</li>
				<li className='nav__item'>
					<button onClick={() => {}} type='button'>
						Sign up for future retirement insights
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
