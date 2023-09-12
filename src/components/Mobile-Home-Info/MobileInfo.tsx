import { useState } from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';

import MobileYouTubeEmbedded from '../Mobile-YouTubeEmbedded/MobileYoutubeEmbedded';

const MobileInfo = () => {
	const [historySwitched, setHistorySwitched] = useState<boolean>(false);
	const isWideMobile = useMediaQuery('(min-width:430px)');
	const handleHistorySwitch = () => {
		setHistorySwitched(!historySwitched);
	};
	return (
		<Box>
			<Button variant="contained" sx={{ position: 'absolute', top: '2.5%', right: '5%' }} onClick={handleHistorySwitch}>
				{historySwitched ? 'Преимущества' : 'История'}
			</Button>
			<Box className="Centered" mt={isWideMobile ? 0 : '3em'} gap="1em" flexDirection="column">
				{historySwitched ? (
					<Box className="HistoryContainer" p={1}>
						<Typography gutterBottom variant="h5" fontWeight="bold" pb="1em">
							История компании
						</Typography>
						<Box pb="1em">
							<Typography variant={isWideMobile ? 'body1' : 'body2'}>
								История создания южнокорейского бренда Атоми уходит в 2009 год. Начиналось все с косметических товаров, нацеленных на узкую аудиторию. Со временем компания расширила свой ассортимент,
								предлагая покупателям продукты питания, одежду и электронику.
							</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant={isWideMobile ? 'body1' : 'body2'}>
								Благодаря уникальной и индивидуальной политике продаж, Атоми быстро набрала обороты и стала одной из самых популярных компаний, которая гарантирует не только высокое качество
								предлагаемой продукции, но и доступную цену.
							</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant={isWideMobile ? 'body1' : 'body2'}>
								Принцип компании, заложенный ее председателем Пак Хан Гилем: «Абсолютное качество по абсолютной цене». Девизом Атоми стал слоган «Массовость и престиж».
							</Typography>
						</Box>
						<Box pb="1em" className="Centered">
							<MobileYouTubeEmbedded isWideMobile={isWideMobile} />
						</Box>
						<Box pb="1em">
							<Typography variant={isWideMobile ? 'body1' : 'body2'} fontWeight="bold" textAlign="center">
								Присоеденяйтесь к более 25,000,000 человек уже ставшими нашими партнёрами
							</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant={isWideMobile ? 'body1' : 'body2'} fontWeight="bold" textAlign="center">
								Компания представлена в 22 странах и насчитывает оборот более чем 1,500,000,000 долларов только за 2019 год
							</Typography>
						</Box>
					</Box>
				) : (
					<Box className="AdvantagesContainer" p={1}>
						<Typography variant="h5" fontWeight="bold">
							Преимущества работы с ATOMY
						</Typography>
						<Box pb="1em">
							<Typography variant="h6" gutterBottom>
								Надёжность
							</Typography>
							<Typography variant="body1">
								Компания уже работает больше 13 лет. Идёт увеличение товарооборота. В России компания продолжает работать, поставки идут и цена не меняется и не менялась с 2018 года.
							</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant="h6" gutterBottom>
								Продукция
							</Typography>
							<Typography variant="body1">Корейская продукция очень популярна во всём мире. Широкий ассортимент различных товаров для всей семьи по доступной цене и высокого качества.</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant="h6" gutterBottom>
								Лёгкий старт
							</Typography>
							<Typography variant="body1">
								Для получения вознаграждений нужна активация личного кабинета и один заказ стоимостью 1400 – 2500 рублей один раз, далее заказ один раз в 6 месяцев на любую сумму.
							</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant="h6" gutterBottom>
								Международные связи
							</Typography>
							<Typography variant="body1">Ваш номер ID действителен за рубежом, вы не ограничены территорией своей страны для привлечения партнёров и клиентов.</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant="h6" gutterBottom>
								Удалённая работа
							</Typography>
							<Typography variant="body1">Работайте, где и когда вам удобно. Любой вопрос можно решить благодаря круглосуточной поддержке команды компании.</Typography>
						</Box>
						<Box pb="1em">
							<Typography variant="h6" gutterBottom>
								Пассивный доход
							</Typography>
							<Typography variant="body1">Продукция повседневного спроса будет востребована всегда, за счёт этого товарооборот будет расти и соответственно вознаграждения от компании.</Typography>
						</Box>
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default MobileInfo;
