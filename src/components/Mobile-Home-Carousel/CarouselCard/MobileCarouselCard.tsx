import { useState } from 'react';
import { Box, Typography, Dialog, DialogContent, Button, useMediaQuery } from '@mui/material';

const MobileCarouselCard = (props: any) => {
	const isWideMobile: boolean = useMediaQuery('(min-width: 350px)');
	const [detailedOpened, setDetailedOpen] = useState<boolean>(false);
	const handleDetailedOpen = () => {
		setDetailedOpen(true);
	};
	const handleDetailedClosed = () => {
		setDetailedOpen(false);
	};
	return (
		<Box>
			<Box className="Centered" flexDirection="column" gap={6} minHeight="60vh" px="1.3em">
				<Box
					mb="2em"
					sx={{
						img: {
							height: '80%',
							width: '80%',
						},
					}}
				>
					<img src={props.image} alt="product image" />
				</Box>
				<Box
					className="Centered"
					flexDirection="column"
					py={4}
					sx={{
						height: {
							xs: '12em',
							sm: '4em',
							md: '4em',
						},
					}}
				>
					<Typography width="100%" variant={isWideMobile ? 'h6' : 'body1'} mb={4} lineHeight={isWideMobile ? 1.6 : 1.4}>
						{props.description}
					</Typography>
				</Box>
				<Button variant="contained" onClick={handleDetailedOpen}>
					Узнать больше
				</Button>

				<Box className="DetailedDialogContainer">
					<Dialog
						open={detailedOpened}
						onClose={handleDetailedClosed}
						sx={{
							img: {
								width: '100%',
							},
						}}
					>
						<DialogContent>
							<img src={props.detailed} alt="detaied info" />
						</DialogContent>
					</Dialog>
				</Box>
			</Box>
		</Box>
	);
};

export default MobileCarouselCard;
