import reactJsIcon from '../assets/icons/reactjs-icon.svg';
import vueJsIcon from '../assets/icons/vuejs.png';
import nodeJsIcon from '../assets/icons/nodejs.png';
import htmlIcon from '../assets/icons/html.png';
import cssIcon from '../assets/icons/css.png';
import scssIcon from '../assets/icons/scss.png';
import javascriptIcon from '../assets/icons/javascript.png';
import typescriptIcon from '../assets/icons/typescript.svg';
import pythonIcon from '../assets/icons/python.png';
import cIcon from '../assets/icons/c.webp';
import cppIcon from '../assets/icons/cpp.png';
import sqlIcon from '../assets/icons/sql.png';
import mongodbIcon from '../assets/icons/mongodb.png';
import noSqlIcon from '../assets/icons/noSql.png';
import sqlLiteIcon from '../assets/icons/sqllite.png';
import mysqlIcon from '../assets/icons/mysql.png';
import postgreSqlIcon from '../assets/icons/postgresql.png';
import flutterIcon from '../assets/icons/flutter.svg';
import dartIcon from '../assets/icons/dart.png';
import restApiIcon from '../assets/icons/restApi.png';
import phpIcon from '../assets/icons/php.svg';

export const skills = [
	{
		title: 'React.js',
		description: 'A JavaScript library for building user interfaces',
		icon: reactJsIcon,
		url: 'https://reactjs.org/',
		progress: 85,
		active: true,
		type: 'Framework',
	},
	{
		title: 'Vue.js',
		description: 'The Progressive JavaScript Framework',
		icon: vueJsIcon,
		url: 'https://vuejs.org/',
		progress: 45,
		active: true,
		type: 'Framework',
	},
	{
		title: 'Node.js',
		description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
		icon: nodeJsIcon,
		url: 'https://nodejs.org/en/',
		progress: 75,
		active: true,
		type: 'Server',
	},
	{
		title: 'TypeScript',
		description: 'TypeScript is Typed JavaScript at Any Scale',
		icon: typescriptIcon,
		url: 'https://www.typescriptlang.org/',
		progress: 60,
		active: true,
		type: 'Programming Language',
	},
	{
		title: 'JavaScript ES6+',
		description:
			'Lightweight, interpreted, or just-in-time compiled programming language with first-class functions',
		icon: javascriptIcon,
		url: 'http://www.ecma-international.org/',
		progress: 98,
		active: true,
		type: 'Programming Language',
	},
	{
		title: 'SCSS',
		description:
			'Most mature, stable, and powerful professional grade CSS extension language',
		icon: scssIcon,
		url: 'https://sass-lang.com/',
		progress: 70,
		active: true,
		type: 'Styling Language',
	},
	{
		title: 'CSS',
		description:
			'A simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents',
		icon: cssIcon,
		url: 'https://www.w3.org/Style/CSS/',
		progress: 95,
		active: true,
		type: 'Styling Language',
	},
	{
		title: 'HTML5',
		description:
			'The standard markup language for documents designed to be displayed in a web browser',
		icon: htmlIcon,
		url: 'https://whatwg.org/',
		progress: 95,
		active: true,
		type: 'Markup Language',
	},
	{
		title: 'Python',
		description:
			'An interpreted, high-level, general-purpose programming language',
		icon: pythonIcon,
		url: 'https://www.python.org/',
		progress: 50,
		active: false,
		type: 'Programming Language',
	},
	{
		title: 'C-language',
		description:
			'A general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion',
		icon: cIcon,
		url: '#',
		progress: 75,
		active: false,
		type: 'Programming Language',
	},
	{
		title: 'C++ language',
		description:
			'A cross-platform language that can be used to create high-performance applications',
		icon: cppIcon,
		url: 'https://isocpp.org/',
		progress: 60,
		active: false,
		type: 'Programming Language',
	},
	{
		title: 'SQL',
		description:
			'A domain-specific language used in programming, managing data held in a RDBMS',
		icon: sqlIcon,
		url: 'https://www.iso.org/standard/63555.html/',
		progress: 75,
		active: true,
		type: 'Query Language',
	},
	{
		title: 'NoSQL',
		description:
			'Store and manage data in ways that allow for high operational speed and great flexibility',
		icon: noSqlIcon,
		url: '#',
		progress: 68,
		active: true,
		type: 'Database',
	},
	{
		title: 'Dart',
		description: 'A client-optimized language for fast apps on any platform',
		icon: dartIcon,
		url: 'https://dart.dev/',
		progress: 45,
		active: true,
		type: 'Programming Language',
	},
	{
		title: 'Flutter',
		description:
			'Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop',
		icon: flutterIcon,
		url: 'https://flutter.dev/',
		progress: 30,
		active: true,
		type: 'Framework',
	},
	{
		title: 'REST API',
		description:
			'REpresentational State Transfer is architectural style for distributed hypermedia systems',
		icon: restApiIcon,
		url: '#',
		progress: 55,
		active: true,
		type: 'Software Architectural Style',
	},
	{
		title: 'PHP',
		description:
			'A general-purpose scripting language that is especially suited to web development',
		icon: phpIcon,
		url: 'https://www.php.net/',
		progress: 55,
		active: false,
		type: 'Programming Language',
	},
	{
		title: 'MongoDB',
		description:
			'A cross-platform document-oriented database program, Classified as a NoSQL database program',
		icon: mongodbIcon,
		url: 'https://www.mongodb.com/',
		progress: 70,
		active: true,
		type: 'Database',
	},
	{
		title: 'MySQL',
		description: 'An open-source relational database management system',
		icon: mysqlIcon,
		url: 'https://www.mysql.com/',
		progress: 80,
		active: true,
		type: 'Database',
	},
	{
		title: 'PostgreSQL ',
		description:
			'A powerful, open source object-relational relational database system',
		icon: postgreSqlIcon,
		url: 'https://www.postgresql.org/',
		progress: 83,
		active: true,
		type: 'Database',
	},
	{
		title: 'SQLite',
		description:
			'A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine',
		icon: sqlLiteIcon,
		url: 'https://www.sqlite.org/index.html',
		progress: 30,
		active: false,
		type: 'Database',
	},
];

export const skillsSortOptions = [
	'Default',
	'TopSkills',
	'ActiveDevelopment',
	'Name',
	'Type',
];

export const sortedSkills = (idx = 0) => {
	switch (idx) {
		case 1:
			return [...skills].sort((a, b) => b.progress - a.progress);
		case 2:
			return [...skills].sort((a, b) => !a.active && b.active);
		case 3:
			return [...skills].sort((a, b) => {
				if (a.title < b.title) {
					return -1;
				}
				if (a.title > b.title) {
					return 1;
				}
				return 0;
			});
		case 4:
			return [...skills].sort((a, b) => {
				if (a.type < b.type) {
					return -1;
				}
				if (a.type > b.type) {
					return 1;
				}
				return 0;
			});
		default:
			return [...skills];
	}
};

export const educations = [
	{
		from: { month: 'July', year: 2017 },
		to: { month: 'July', year: 2020 },
		institutionName: 'Kanchrapara College',
		location: 'Kanchrapara, North 24-PGS',
		under: 'University of Kalyani',
		degree: 'Bachelor of Science',
		specialization: 'Computer Science',
	},
	{
		from: { month: 'July', year: 2015 },
		to: { month: 'July', year: 2017 },
		institutionName: 'Majdia Rail Bazar High School',
		location: 'Majdia, Nadia',
		under: 'WBCHSE',
		degree: 'Higher Secondary',
		specialization: 'Science Stream',
	},
];

export const languages = [
	{
		name: 'English',
		description: 'Professional working proficiency',
		read: true,
		write: true,
		speak: true,
	},
	{
		name: 'Bengali',
		description: 'Native or bilingual proficiency',
		read: true,
		write: true,
		speak: true,
	},
	{
		name: 'Hindi',
		description: 'Limited working proficiency',
		read: false,
		write: false,
		speak: true,
	},
];
