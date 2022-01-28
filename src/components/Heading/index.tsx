import React from 'react';

// styles
import * as S from './styles';

// types
import { Children, HeadingElement, HeadingSize } from '../../types/types';

type HeadingProps = {
	children: Children;
	element: HeadingElement;
	size: HeadingSize;
};

const Heading = ({ children, element, size }: HeadingProps) => (
	<S.Heading as={element} size={size}>
		{children}
	</S.Heading>
);

export default Heading;
