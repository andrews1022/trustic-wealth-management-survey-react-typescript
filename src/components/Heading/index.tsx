import React from 'react';

// styles
import HeadingStyles from './styles';

// types
import { Children, HeadingElement, HeadingSize } from '../../types/types';

type HeadingProps = {
	children: Children;
	element: HeadingElement;
	size: HeadingSize;
};

const Heading = ({ children, element, size }: HeadingProps) => (
	<HeadingStyles as={element} size={size}>
		{children}
	</HeadingStyles>
);

export default Heading;
