import { Box, Typography } from '@mui/material';
import './HomePage.scss';
import title_underline from '../../public/titleUnderline.png';
import RegistrationForm from '../../components/Homescreen-RegistrationForm/RegistrationForm';
import ProductCarousel from '../../components/Homescreen-productCarousel/ProductCarousel';
import ScrolldownButton from '../../components/ScrolldownButton/ScrolldownButton';

const Homescreen = () => {
	return (
		<Box className="HomePage" id="HomePage" display="grid">
			<Box gridArea="registration" className="Centered" m="10%" flexDirection="column">
				<RegistrationForm />
			</Box>
			<Box gridArea="scrolldown" display="flex" justifyContent="center" alignItems="flex-end">
				<Box pb="5%">
					<ScrolldownButton />
				</Box>
			</Box>
			<Box gridArea="title" className="Title-container Centered" fontFamily="'Rubik',sans-serif;" flexDirection="column" mx="10%" mt="15%" height="80vh">
				<Typography variant="h3" className="Title-text" letterSpacing="3px">
					ATOMY
				</Typography>
				<img src={title_underline} alt="title-underline" />
				<Typography variant="h5" className="Title-subtitle" fontFamily="'Rubik',sans-serif;" py="1rem" textAlign="center">
					Премиальная косметика и продукты из Кореи
				</Typography>
				<Box>
					<ProductCarousel />
				</Box>
			</Box>
		</Box>
	);
};

export default Homescreen;
