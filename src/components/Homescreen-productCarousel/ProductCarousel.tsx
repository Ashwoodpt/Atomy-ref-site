import Carousel from 'react-material-ui-carousel';
import { Box, Typography, Link, useMediaQuery } from '@mui/material';
import { products } from './products';
import CarouselCard from './CarouselCard/CarouselCard';

const ProductCarousel = () => {
	const isWideScreen = useMediaQuery('(min-width: 1600px)');
	return (
		<Box className="Product-carousel Glass Centered" flexDirection="column" gap="1rem">
			<Typography variant={isWideScreen ? 'h4' : 'h5'} mt={2}>
				Наши продукты
			</Typography>

			<Carousel indicators={false} animation="slide" sx={{ width: '80%', height: '30rem', margin: '0 2rem' }}>
				{products.map((product, i) => (
					<Box key={i}>
						<CarouselCard name={product.name} description={product.description} image={product.image} detaied={product.detailed} isWideScreen={isWideScreen} />
					</Box>
				))}
			</Carousel>
			<Typography gutterBottom textAlign="center" variant={isWideScreen ? 'h6' : 'body2'} color="GrayText">
				*Здесь представлены не все товары компании, все товары можно посмотреть {<Link href="https://shop.atomy.com/">здесь</Link>}
			</Typography>
		</Box>
	);
};

export default ProductCarousel;
