const experiences = [
	{
		title: 'Frontend Developer',
		company: 'Secret Santa',
		date: 'Декабрь 2023',
		linkToGit: '',
		linkToSite: 'https://secret-santa-1.netlify.app/',
		description:
			'Работа в небольшом стартапе над созданием проекта Secret Santa предназначенного для  проведения тайных жеребьёвок с вручением подарков. Участвовал в проекте в качестве fronted-разработчика.',
		points: [
			'Создание компонентов разной сложности',
			'Работа Rest API - отправка запросов на сервер',
			'получение данных и их обработка с последующей отрисовкой на странице.',
			'Валидация форм ',
			'CSS анимация для интерактивных элементов.',
		],
		tech: ['React', 'Styled components', 'Yup', 'React-hook-form', 'Netlify'],
	},
];

const projects = [
	{
		title: 'Portfolio',
		description: 'Portfolio',
		tech: ['React', 'Styled components', 'Yup', 'React-hook-form', 'Netlify'],
		linkToGithub: '',
		linkToSite: '',
	},
];

const MENU_LINKS = [
	{
		id: 'about',
		title: 'Обо мне',
	},
	{
		id: 'work',
		title: 'Работа',
	},
	{
		id: 'projects',
		title: 'Проекты',
	},
	{
		id: 'contacts',
		title: 'Контакты',
	},
];

export {experiences, projects, MENU_LINKS};
