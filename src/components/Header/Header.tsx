import { Box, Button } from '@mui/material';
//@ts-ignore
import { Link } from 'react-scroll';
const Header = () => {
	return (
		<Box
			className="Glass"
			height="5vh"
			width="100vw"
			position="fixed"
			top="0%"
			display="flex"
			alignItems="center"
			justifyContent="center"
			borderRadius="0"
			zIndex="100"
			overflow="clip"
			boxShadow="2px 2px 20px black"
		>
			<Link to="HomePage" spy={true} smooth={true} duration={400}>
				<Button variant="text">Регистрация</Button>
			</Link>
			<Link to="AdvantagesPage" spy={true} smooth={true} duration={400}>
				<Button variant="text">Преимущества</Button>
			</Link>
			<Link to="HistoryPage" spy={true} smooth={true} duration={400}>
				<Button variant="text">История</Button>
			</Link>
		</Box>
	);
};

export default Header;
