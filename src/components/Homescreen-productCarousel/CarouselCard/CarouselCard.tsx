import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Dialog, DialogContent } from '@mui/material';
import './CarouselCard.scss';

const CarouselCard = (props: any) => {
	const [detailedOpened, setDetailedOpen] = useState<boolean>(false);
	const handleDetailedOpen = () => {
		setDetailedOpen(true);
	};
	const handleDetailedClosed = () => {
		setDetailedOpen(false);
	};
	return (
		<Box>
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
						<img src={props.detaied} alt="detailed info" />
					</DialogContent>
				</Dialog>
			</Box>
			<Card>
				<a className="DetailedButtonContainer" onClick={handleDetailedOpen}>
					<Box className="ImageBlur Centered" height={props.isWideScreen ? '340px' : '280px'} width="100%">
						<Typography className="ImageButton" variant="h6" fontWeight="bold" sx={{}}>
							Подробнее
						</Typography>
					</Box>
					<CardMedia component="img" alt="product image" image={props.image} height={props.isWideScreen ? '340px' : '280px'} width="340px" />
				</a>
				<CardContent sx={{ height: '8em' }}>
					<Typography variant={'h6'}>{props.name}</Typography>
					<Typography variant="body2">{props.description}</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default CarouselCard;
