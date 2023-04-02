const experiences = [
	{
		id: '1',
		company: 'Secret Santa',
		date: 'Ноябрь 2022',
		position: 'Frontend Developer',
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
		tech: ['React', 'Styled components', 'Yup', 'React-hook-form', 'Netlify', 'MUI'],
	},
];

const projects = [
	{
		id: '1',
		title: 'Портфолио',
		description:
			'Сайт-портфолио для отображения моих работ, тот на котором вы сейчас находитесь. Если перейдете по ссылке, то попадете на этот же сайт. А затем в секции проекты снова перейдете на этот же сайт и так далее - это рекурсия.',
		tech: [
			'React',
			'Css modules',
			'Framer-motion',
			'Email.js',
			'React-three-fiber',
			'React-router',
		],
		img: '../../assets/portfolio-bg.jpg',
		linkToGithub: 'https://github.com/Andy-Esm/my-portfolio',
		linkToSite: '',
	},
	{
		id: '2',
		title: 'Портфолио',
		description:
			'Сайт-портфолио для отображения моих работ, тот на котором вы сейчас находитесь. Если перейдете по ссылке, то попадете на этот же сайт. А затем в секции проекты снова перейдете на этот же сайт и так далее - это рекурсия.',
		tech: [
			'React',
			'Css modules',
			'Framer-motion',
			'Email.js',
			'React-three-fiber',
			'React-router',
		],
		linkToGithub: '',
		linkToSite: '',
	},
	{
		id: '3',
		title: 'Портфолио',
		description:
			'Сайт-портфолио для отображения моих работ, тот на котором вы сейчас находитесь. Если перейдете по ссылке, то попадете на этот же сайт. А затем в секции проекты снова перейдете на этот же сайт и так далее - это рекурсия.',
		tech: [
			'React',
			'Css modules',
			'Framer-motion',
			'Email.js',
			'React-three-fiber',
			'React-router',
		],
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

const skills = [
	'Html',
	'Css',
	'Sass',
	'Java Script',
	'React',
	'Framer-motion',
	'Gulp',
	'Vite',
	'Scrum',
];

export {experiences, projects, MENU_LINKS, skills};
