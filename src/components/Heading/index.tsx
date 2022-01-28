import React from 'react';

// styles
import * as S from './styles';

// types
import { Children, HeadingElement } from '../../types/types';
import { StyledHeadingProps } from './styles';

interface HeadingProps extends StyledHeadingProps {
	children: Children;
	element: HeadingElement;
}

const Heading = ({ children, element, size }: HeadingProps) => (
	<S.Heading as={element} size={size}>
		{children}
	</S.Heading>
);

export default Heading;
