import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: `Rubik, sans-serif`,
	},
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
