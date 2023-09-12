import { useState } from 'react';
import { useMediaQuery,ThemeProvider,createTheme,responsiveFontSizes } from '@mui/material';
import HomePage from './pages/HomePage/HomePage';
import AdvantagesPage from './pages/AdvantagesPage/AdvantagesPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import Header from './components/Header/Header';
import MobileHomePage from './pages/mobile/MobileHomePage/MobileHomePage';

function App() {

	const [isNonMobile, setIsNonMobile] = useState(useMediaQuery('(min-width: 1200px)'));
	let theme = createTheme();
	theme = responsiveFontSizes(theme)
	return (
		<div className="App">
			{isNonMobile ? (
				<ThemeProvider theme={theme}>
				<div>
					<Header  />
					<HomePage />
					<AdvantagesPage />
					<HistoryPage />
				</div>
					
				</ThemeProvider>
			) : (
				<div>
          <MobileHomePage />
        </div>
			)}
		</div>
	);
}

export default App;
