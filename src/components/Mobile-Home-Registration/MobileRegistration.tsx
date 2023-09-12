import { useState, useEffect } from 'react';
import { Box, Typography, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, useMediaQuery } from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiTelInput } from 'mui-tel-input';
import dayjs, { Dayjs } from 'dayjs';
import locale from 'dayjs/locale/ru';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const MobileRegistration = (props: any) => {
	const isWideMobile = useMediaQuery('(min-width: 400px )');

	const [fullName, setFullName] = useState<string>('');
	const nameRegEx: RegExp = new RegExp('^[\\u0400-\\u04FF]{3,}\\s{1}[\\u0400-\\u04FF]{3,}\\s{1}[\\u0400-\\u04FF]{3,}');
	const [validName, setValidName] = useState<boolean>(false);

	const [city, setCity] = useState<string>('');
	const cityRegEx: RegExp = new RegExp('^[\u0400-\u04FF]{3,}');
	const [validCity, setValidCity] = useState<boolean>(false);

	const [phone, setPhone] = useState<string>('');
	const phoneRegEx: RegExp = new RegExp('^(\\+\\d{1,3}[-\\s]?)?\\d{10}$');
	const [validPhone, setValidPhone] = useState<boolean>(false);

	const [email, setEmail] = useState<string>('');
	const emailRegEx: RegExp = new RegExp('^\\w+([.-]?\\w+)*\\@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$');
	const [validEmail, setValidEmail] = useState<boolean>(false);

	const [birthdayDate, setBirthdayDate] = useState<Dayjs | null>(dayjs());

	const [contactReason, setContactReason] = useState<string | null>(null);
	const [validReason, setValidReason] = useState<boolean>(false);

	const [validForm, setValidForm] = useState<boolean>(false);

	const handleDateChange = (newDate: Dayjs | null) => {
		newDate ? setBirthdayDate(newDate) : setBirthdayDate(dayjs());
	};
	const handleNameChange = (fullName: string) => {
		setFullName(fullName);
		setValidName(nameRegEx.test(fullName));
	};
	const handleCityChange = (city: string) => {
		setCity(city);
		setValidCity(cityRegEx.test(city));
	};
	const handlePhoneChange = (phone: string) => {
		setPhone(phone);
		setValidPhone(phoneRegEx.test(phone));
	};
	const handleEmailChange = (email: string) => {
		setEmail(email);
		setValidEmail(emailRegEx.test(email));
	};
	const handleReasonChange = (reason: string) => {
		if (reason === 'Покупка для себя' || reason === 'Сотрудничество') {
			setContactReason(reason);
			setValidReason(true);
		}
	};

	useEffect(() => {
		if (validName && validCity && validPhone && validReason && validEmail) {
			setValidForm(true);
		} else setValidForm(false);
	}, [validName, validCity, validPhone, validEmail, validReason]);

	const handleFormSubmit = () => {
		axios
			.post('https://api.telegram.org/bot5956809002:AAG1uWvC32mrOJipG5c5xqxiDMQHxJJo_Us/sendMessage', {
				chat_id: '932440169',
				text: `Новая регистрация! \n \n Имя: ${fullName} \n Дата рождения: ${birthdayDate
					?.format('DD/MM/YYYY')
					.toString()} \n Из города: ${city} \n Телефон: ${phone} \n Email: ${email} \n Цель связи: ${contactReason}`,
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Box className="Centered" flexDirection="column">
			<Typography variant={isWideMobile ? 'h5' : 'h6'} textAlign="center">
				Заполните анкету и получите скидку 15%
			</Typography>
			<Box className="Centered" flexDirection="column" mt="2rem" width="80%" gap={isWideMobile ? 4 : 2}>
				<TextField
					id="fullNameInput"
					label="Ф.И.О"
					variant="outlined"
					value={fullName}
					onChange={(e) => {
						handleNameChange(e.target.value);
					}}
					error={!validName}
					size={isWideMobile ? 'medium' : 'small'}
					fullWidth
				/>
				<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
					<MobileDatePicker label="Дата рождения" inputFormat="DD/MM/YYYY" value={birthdayDate} onChange={handleDateChange} renderInput={(params) => <TextField {...params} fullWidth />} />
				</LocalizationProvider>
				<TextField id="cityInput" label="Город" variant="outlined" value={city} onChange={(e) => handleCityChange(e.target.value)} error={!validCity} fullWidth />
				<MuiTelInput fullWidth value={phone} defaultCountry="RU" onChange={handlePhoneChange} error={!validPhone} />
				<TextField id="emailInput" label="Email" variant="outlined" value={email} onChange={(e) => handleEmailChange(e.target.value)} error={!validEmail} fullWidth />
				<FormControl error={!validReason}>
					<FormLabel>Цель</FormLabel>
					<RadioGroup aria-labelledby="contact-reason" value={contactReason} name="contact-reason-radio-group" onChange={(e) => handleReasonChange(e.target.value)}>
						<Box>
							<FormControlLabel value="Покупка для себя" control={<Radio />} label="Покупка для себя" />
							<FormControlLabel value="Сотрудничество" control={<Radio />} label="Сотрудничество" />
						</Box>
					</RadioGroup>
				</FormControl>
				<Button variant="contained" endIcon={<SendIcon />} size="large" onClick={handleFormSubmit} disabled={!validForm}>
					Отправить
				</Button>
				<Typography variant="caption" color="#6E6A6F" m="0 1rem 1rem 1rem">
					* Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности
				</Typography>
			</Box>
		</Box>
	);
};

export default MobileRegistration;
