import { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogContent } from '@mui/material';
import title_underline from '../../../public/titleUnderline.png';
import './MobileHomePage.scss';
import MobileCarousel from '../../../components/Mobile-Home-Carousel/MobileCarousel';
import MobileRegistration from '../../../components/Mobile-Home-Registration/MobileRegistration';
import MobileInfo from '../../../components/Mobile-Home-Info/MobileInfo';

const MobileHomePage = () => {
	const [registrationOpened, setRegistrationOpened] = useState<boolean>(false);
	const [infoOpened, setInfoOpened] = useState<boolean>(false);

	const handleRegistrationOpen = () => {
		setRegistrationOpened(true);
	};
	const handleInfoOpen = () => {
		setInfoOpened(true);
	};
	const handleRegistrationClose = () => {
		setRegistrationOpened(false);
	};
	const handleInfoClose = () => {
		setInfoOpened(false);
	};

	return (
		<Box className="Mobile-Home" position="relative">
			<Box
				mt={4}
				flexDirection="column"
				height="100%"
				textAlign="center"
				sx={{
					img: {
						width: '50%',
					},
				}}
			>
				<Typography variant="h3" className="Title-text" fontFamily="'Rubik',sans-serif;" letterSpacing="3px">
					ATOMY
				</Typography>
				<img src={title_underline} alt="title-underline" />
				<Typography variant="h5" className="Title-subtitle" fontFamily="'Rubik',sans-serif;" py="1rem" color="black">
					Премиальная косметика и продукты из Кореи
				</Typography>
				<MobileCarousel />
				<Box position="absolute" bottom="2rem" left="7%" className="Centered Glass" width="86vw" height="4rem" justifyContent="space-evenly">
					<Button size="large" onClick={handleRegistrationOpen}>
						Регистрация
					</Button>
					<Box className="RegistrationContainer">
						<Dialog open={registrationOpened} onClose={handleRegistrationClose} className="Glass">
							<DialogContent>
								<MobileRegistration />
							</DialogContent>
						</Dialog>
					</Box>
					<Button size="large" onClick={handleInfoOpen}>
						О нас
					</Button>
					<Box className="InfoContainer">
						<Dialog open={infoOpened} onClose={handleInfoClose} className="Glass">
							<DialogContent>
								<MobileInfo />
							</DialogContent>
						</Dialog>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default MobileHomePage;
