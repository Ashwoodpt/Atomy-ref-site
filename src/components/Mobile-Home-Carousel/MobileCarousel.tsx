import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { products } from '.././Homescreen-productCarousel/products';
import MobileCarouselCard from './CarouselCard/MobileCarouselCard';

const MobileCarousel = (props: any) => {
	return (
		<Box className="Mobile-carousel Glass" display="flex" justifyContent="center" sx={{ maxHeight: '70vh', mx: { xs: 4, sm: 6, md: 5 } }}>
			<Carousel
				animation="slide"
				navButtonsAlwaysInvisible
				sx={{
					height: '90vh',
					width: '90%',
					p: '1.5rem',
				}}
			>
				{products.map((product, i) => (
					<Box key={i} height="100%">
						<MobileCarouselCard image={product.image} description={product.description} detailed={product.detailed} />
					</Box>
				))}
			</Carousel>
		</Box>
	);
};

export default MobileCarousel;
