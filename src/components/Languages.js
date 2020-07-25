import { h } from 'preact';
import style from './Languages.scss';

const languages = [
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

const Language = ({}) => {
	return <div className={style.language}>aaa</div>;
};

export default () => {
	return (
		<div className={style.languageContainer}>
			{languages.map((language) => (
				<Language />
			))}
		</div>
	);
};
