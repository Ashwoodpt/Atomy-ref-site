import { Box, Container, Typography, Stack, useMediaQuery } from '@mui/material';
import './HistoryPage.scss';
import YouTubeEmbedded from '../../components/HistoryPage-YouTubeEmbedded/YouTubeEmbedded';
import PublicIcon from '@mui/icons-material/Public';
import PersonIcon from '@mui/icons-material/Person';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
const HistoryPage = () => {
	const isWideScreen = useMediaQuery('(min-width: 1600px)');
	return (
		<Box className="HistoryPage" id="HistoryPage">
			<Box className="History-container" display="flex" gap="2rem" pt="3rem" px="5rem" alignItems="center" justifyContent="space-evenly" height="100%">
				<Container className="Glass History-text" sx={{ paddingBottom: '1rem', height: '85%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
					<Typography gutterBottom variant="h3" fontWeight="bold" color="primary" mt={3}>
						История компании
					</Typography>
					<Typography variant={isWideScreen ? 'h5' : 'h6'} component="p">
						История создания южнокорейского бренда Атоми уходит в 2009 год. Начиналось все с косметических товаров, нацеленных на узкую аудиторию. Со временем компания расширила свой ассортимент,
						предлагая покупателям продукты питания, одежду и электронику.
					</Typography>
					<Typography variant={isWideScreen ? 'h5' : 'h6'} component="p" mt="1rem">
						Благодаря уникальной и индивидуальной политике продаж, Атоми быстро набрала обороты и стала одной из самых популярных компаний, которая гарантирует не только высокое качество предлагаемой
						продукции, но и доступную цену.
					</Typography>
					<Typography variant={isWideScreen ? 'h5' : 'h6'} component="p" mt="1rem">
						Принцип компании, заложенный ее председателем Пак Хан Гилем: «Абсолютное качество по абсолютной цене». Девизом Атоми стал слоган «Массовость и престиж».
					</Typography>
					<Stack direction="row" spacing={1} mt={4}>
						<Box fontSize="64px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" maxWidth="25rem">
							<PublicIcon fontSize="inherit" color="action" />
							<Typography gutterBottom variant={isWideScreen ? 'h6' : 'body1'} fontWeight="bold" color="primary" mt={2}>
								22
							</Typography>
							<Typography variant={isWideScreen ? 'h6' : 'body1'} fontWeight="bold">
								стран, в которых представлена компания
							</Typography>
						</Box>
						<Box fontSize="64px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" maxWidth="25rem">
							<PersonIcon fontSize="inherit" color="action" />
							<Typography gutterBottom variant={isWideScreen ? 'h6' : 'body1'} fontWeight="bold" color="primary" mt={2}>
								25,000,000
							</Typography>
							<Typography variant={isWideScreen ? 'h6' : 'body1'} fontWeight="bold">
								человек уже стали партнерами
							</Typography>
						</Box>
						<Box fontSize="64px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" maxWidth="25rem">
							<CurrencyExchangeIcon fontSize="inherit" color="action" />
							<Typography gutterBottom variant={isWideScreen ? 'h6' : 'body1'} fontWeight="bold" color="primary" mt={2}>
								1,500,000,000
							</Typography>
							<Typography variant={isWideScreen ? 'h6' : 'body1'} fontWeight="bold">
								долларов оборот за 2019 год
							</Typography>
						</Box>
					</Stack>
				</Container>
				<Box display="flex" flexDirection="column" height="85%" justifyContent="space-between">
					<Box className="Glass" gridArea="video" p="2rem" maxWidth="640" maxHeight="340">
						<YouTubeEmbedded />
					</Box>
					<Box className="Glass" gridArea="contacts">
						<Stack spacing={2} p="2rem">
							<Container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', gap: '2rem' }}>
								<LocalPhoneIcon fontSize="large" color="action" />
								<TelegramIcon fontSize="large" color="action" />
								<WhatsAppIcon fontSize="large" color="action" />
							</Container>
							<Typography variant="h3" width="100%" textAlign="center">
								+7 9991326635
							</Typography>
							<Container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
								<EmailIcon fontSize="large" color="action" />
							</Container>
							<Typography variant="h3" width="100%" textAlign="center">
								atomy.registr@yandex.ru
							</Typography>
						</Stack>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default HistoryPage;
