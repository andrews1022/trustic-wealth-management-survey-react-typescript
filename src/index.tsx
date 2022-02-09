import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

// styled components
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

// components
import App from './App';

ReactDOM.render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</StrictMode>,
	document.getElementById('root')
);
