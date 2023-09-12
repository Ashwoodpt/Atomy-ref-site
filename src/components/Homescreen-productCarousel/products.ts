import AbsoluteImg from '../../public/ProductCarousel/Beauty_Absolute.png';
import AcneImg from '../../public/ProductCarousel/Beauty_ACNE.png';
import FameImg from '../../public/ProductCarousel/Beauty_Fame.png';
import AlaskaImg from '../../public/ProductCarousel/Health_Alaska.png';
import HemohimImg from '../../public/ProductCarousel/Health_HEMOHIM.png';
import SpirulinaImg from '../../public/ProductCarousel/Health_Spirulina.png';
import NoodlesImg from '../../public/ProductCarousel/Edibles_Noodles.png';
import ArabicaImg from '../../public/ProductCarousel/Edibles_Arabica.png';
import SeaweedImg from '../../public/ProductCarousel/Edibles_Seaweed.png';
import AbsoluteDetailed from '../../public/ProductCarousel/Acne_detailed.jpg';
import AcneDetailed from '../../public/ProductCarousel/Acne_detailed.jpg';
import FameDetailed from '../../public/ProductCarousel/Fame_detailed.jpg';
import AlaskaDetailed from '../../public/ProductCarousel/Alaska_detailed.jpg';
import HemohimDetailed from '../../public/ProductCarousel/Hemohim_detailed.jpg';
import SpirulinaDetaied from '../../public/ProductCarousel/Spirulina_detailed.png';
import NoodlesDetailed from '../../public/ProductCarousel/Noodles_detailed.jpg';
import ArabicaDetailed from '../../public/ProductCarousel/Arabica_detailed.jpg';
import SeaweedDetailed from '../../public/ProductCarousel/Seaweed_detailed.jpg';

type CarouselProduct = {
	name: string;
	description: string;
	image: any;
	detailed: any;
};

export const products: Array<CarouselProduct> = [
	{
		name: 'Набор для лица Fame',
		description: 'Атоми Фэйм Набор — комплексная пятиступенчатая система по уходу за кожей с природными компонентами.',
		image: FameImg,
		detailed: FameDetailed,
	},
	{
		name: 'Набор для лица Absolute',
		description: 'Набор для ухода за кожей. Комплексная лечебная программа для устранения признаков старения кожи.',
		image: AbsoluteImg,
		detailed: AbsoluteDetailed,
	},
	{
		name: 'Набор для лица Acne Expert',
		description: 'Атоми Акне Эксперт набор — универсальная профессиональная система для ухода за проблемной кожей.',
		image: AcneImg,
		detailed: AcneDetailed,
	},
	{
		name: 'Пищевая добавка HEMOHIM',
		description: 'Способствует восстановлению иммунитета, жизненной энергии, физической выносливости, при стрессе и переутомлении.',
		image: HemohimImg,
		detailed: HemohimDetailed,
	},
	{
		name: 'Спирулина от ATOMY',
		description: '100% спирулина с содержанием древнего хлорофилла. Способствует оздоровлению кожи и выработке антиоксидантов.',
		image: SpirulinaImg,
		detailed: SpirulinaDetaied,
	},
	{
		name: 'ATOMY Alaska E-OMEGA 3',
		description: 'Источник необходимых ненасыщеных жирных кислот,помогает поддержать здоровье сердца и снизить риск заболеваний сердечно-сосудистой системы.',
		image: AlaskaImg,
		detailed: AlaskaDetailed,
	},
	{
		name: 'Вегатерианская лапша ATOMY',
		description: 'Атоми Вегетарианская Лапша из картофельной муки с натуральными овощами, пикантным вкусом красного перца и высоким содержанием пищевых волокон.',
		image: NoodlesImg,
		detailed: NoodlesDetailed,
	},
	{
		name: 'Черное кофе Арабика ATOMY',
		description: 'Кофе арабика черный с глубоким вкусом и ароматом из бразильских и колумбийских сортов арабики.',
		image: ArabicaImg,
		detailed: ArabicaDetailed,
	},
	{
		name: 'Морская капуста от ATOMY',
		description: 'Натуральная,полезная и питательная морская капуста из экологически чистых районов Кореи с минеральной солью, жареная в оливковом масле из Испании.',
		image: SeaweedImg,
		detailed: SeaweedDetailed,
	},
];
