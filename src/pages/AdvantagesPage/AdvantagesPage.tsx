import { Box, Typography, Grid, Card, CardContent, CardMedia, useMediaQuery } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
// @ts-ignore
import { Link } from 'react-scroll';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import './AdvantagesPage.scss';
import Button from '@mui/material/Button';

const AdvantagesPage = () => {
	const isWideScreen: boolean = useMediaQuery('(min-width: 1440px)');
	const { ref, inView } = useInView({ threshold: 0.1 });
	const firstColumn = useAnimation();
	const secondColumn = useAnimation();
	const thirdColumn = useAnimation();
	const CardMotion = motion(Card);

	useEffect(() => {
		if (inView) {
			thirdColumn.start({
				opacity: 1,
				x: 0,
				transition: {
					type: 'spring',
					duration: 1,
					delay: 1,
				},
			});
			secondColumn.start({
				opacity: 1,
				x: 0,
				transition: {
					type: 'spring',
					duration: 1,
					delay: 0.75,
				},
			});
			firstColumn.start({
				opacity: 1,
				x: 0,
				transition: {
					type: 'spring',
					duration: 1,
					delay: 0.5,
				},
			});
		}
		if (!inView) {
			thirdColumn.start({
				opacity: 0,

				transition: {
					duration: 1,
				},
			});
			secondColumn.start({
				opacity: 0,

				transition: {
					duration: 1,
				},
			});
			firstColumn.start({
				opacity: 0,

				transition: {
					duration: 1,
				},
			});
		}
	}, [inView]);

	return (
		<Box className="AdvantagesPage Centered" id="AdvantagesPage">
			<Box className="Glass" width="85vw" height="90vh" display="flex" flexDirection="column" alignContent="center" justifyItems="space-evenly" textAlign="center" mt="2rem">
				<motion.div ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
					<Typography gutterBottom variant="h3" fontWeight="bold" mt="1rem">
						Преимущества регистрации в Атоми
					</Typography>

					<Box>
						<Grid container spacing={isWideScreen ? 5 : 2} padding="1rem 2rem">
							<Grid item xs={4}>
								<CardMotion sx={{ borderRadius: '16px', height: '100%' }} animate={firstColumn} initial={{ x: '-100vw' }}>
									<CardMedia sx={{ fontSize: '5rem' }}>
										<ThumbUpOutlinedIcon fontSize="inherit" sx={{ paddingTop: '2rem' }} />
									</CardMedia>
									<CardContent>
										<Typography gutterBottom variant="h5">
											Надёжность
										</Typography>
										<Typography variant={isWideScreen ? 'body1' : 'body2'}>
											Компания уже работает больше 13 лет. Идёт увеличение товарооборота. В России компания продолжает работать, поставки идут и цена не меняется и не менялась с 2018 года
										</Typography>
									</CardContent>
								</CardMotion>
							</Grid>
							<Grid item xs={4}>
								<CardMotion sx={{ borderRadius: '16px', height: '100%' }} animate={secondColumn} initial={{ x: '-100vw' }}>
									<CardMedia sx={{ fontSize: '5rem' }}>
										<WorkspacePremiumOutlinedIcon fontSize="inherit" sx={{ paddingTop: '2rem' }} />
									</CardMedia>
									<CardContent>
										<Typography gutterBottom variant="h5">
											Продукция
										</Typography>
										<Typography variant={isWideScreen ? 'body1' : 'body2'}>
											Корейская продукция очень популярна во всём мире. Широкий ассортимент различных товаров для всей семьи по доступной цене и высокого качества.
										</Typography>
									</CardContent>
								</CardMotion>
							</Grid>
							<Grid item xs={4}>
								<CardMotion sx={{ borderRadius: '16px', height: '100%' }} animate={thirdColumn} initial={{ x: '-100vw' }}>
									<CardMedia sx={{ fontSize: '5rem' }}>
										<RocketLaunchOutlinedIcon fontSize="inherit" sx={{ paddingTop: '2rem' }} />
									</CardMedia>
									<CardContent>
										<Typography gutterBottom variant="h5">
											Лёгкий старт
										</Typography>
										<Typography variant={isWideScreen ? 'body1' : 'body2'}>
											Для получения вознаграждений нужна активация личного кабинета и один заказ стоимостью 1400 – 2500 рублей один раз, далее заказ один раз в 6 месяцев на любую сумму;
										</Typography>
									</CardContent>
								</CardMotion>
							</Grid>
							<Grid item xs={4}>
								<CardMotion sx={{ borderRadius: '16px', height: '100%' }} animate={firstColumn} initial={{ x: '-100vw' }}>
									<CardMedia sx={{ fontSize: '5rem' }}>
										<Diversity3OutlinedIcon fontSize="inherit" sx={{ paddingTop: '2rem' }} />
									</CardMedia>
									<CardContent>
										<Typography gutterBottom variant="h5">
											Международные связи
										</Typography>
										<Typography variant={isWideScreen ? 'body1' : 'body2'}>
											Ваш номер ID действителен за рубежом, вы не ограничены территорией своей страны для привлечения партнёров и клиентов;
										</Typography>
									</CardContent>
								</CardMotion>
							</Grid>
							<Grid item xs={4}>
								<CardMotion sx={{ borderRadius: '16px', height: '100%' }} animate={secondColumn} initial={{ x: '-100vw' }}>
									<CardMedia sx={{ fontSize: '5rem' }}>
										<HomeWorkOutlinedIcon fontSize="inherit" sx={{ paddingTop: '2rem' }} />
									</CardMedia>
									<CardContent>
										<Typography gutterBottom variant="h5">
											Удалённая работа
										</Typography>
										<Typography variant={isWideScreen ? 'body1' : 'body2'}>
											Работайте, где и когда вам удобно. Любой вопрос можно решить благодаря круглосуточной поддержке команды компании.
										</Typography>
									</CardContent>
								</CardMotion>
							</Grid>
							<Grid item xs={4}>
								<CardMotion sx={{ borderRadius: '16px', height: '100%' }} animate={thirdColumn} initial={{ x: '-100vw' }}>
									<CardMedia sx={{ fontSize: '5rem' }}>
										<PaymentsOutlinedIcon fontSize="inherit" sx={{ paddingTop: '2rem' }} />
									</CardMedia>
									<CardContent>
										<Typography gutterBottom variant="h5">
											Пассивный доход
										</Typography>
										<Typography variant={isWideScreen ? 'body1' : 'body2'}>
											Продукция повседневного спроса будет востребована всегда, за счёт этого товарооборот будет расти и соответственно вознаграждения от компании.
										</Typography>
									</CardContent>
								</CardMotion>
							</Grid>
						</Grid>
					</Box>
					<Typography gutterBottom mt={2} variant={isWideScreen ? 'h4' : 'h5'}>
						Заполните анкету и начните зарабатывать прямо сейчас!
					</Typography>
					<Link to="HomePage" spy={true} smooth={true} duration={400}>
						<Button variant="contained" size="large">
							Регистрация
						</Button>
					</Link>
				</motion.div>
			</Box>
		</Box>
	);
};

export default AdvantagesPage;
