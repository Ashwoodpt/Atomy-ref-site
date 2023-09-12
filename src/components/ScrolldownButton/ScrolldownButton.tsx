import { Box, Typography } from '@mui/material';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
// @ts-ignore
import { Link } from 'react-scroll';

const ScrolldownButton = () => {
	return (
		<Link to="AdvantagesPage" spy={true} smooth={true} duration={400}>
			<Box
				className="ScrolldownButton Centered"
				fontSize="80px"
				color="#EDFFEC"
				flexDirection="column"
				sx={{
					cursor: 'pointer',
					width: {
						sm: '100px',
						xs: '100px',
						md: '200px',
						lg: '300px',
						xl: '300px',
					},
				}}
			>
				<Typography variant="h6" fontWeight="bold" component="div" textAlign="center">
					Узнайте о нас больше!
				</Typography>
				<KeyboardDoubleArrowDownOutlinedIcon fontSize="inherit" />
			</Box>
		</Link>
	);
};

export default ScrolldownButton;
