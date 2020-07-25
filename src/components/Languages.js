import { h } from 'preact';
import style from './Languages.scss';

const languages = [
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

const Language = ({ name, description, read, write, speak }) => {
	return (
		<div className={style.language}>
			<div className={style.name}>{name}</div>
			<div className={style.description}>{description}</div>
			<div className={style.details}>
				<div>
					<span
						className={
							read
								? `mdi mdi-check-circle ${style.done}`
								: 'mdi mdi-check-circle-outline'
						}
					></span>{' '}
					Read
				</div>
				<div>
					<span
						className={
							write
								? `mdi mdi-check-circle ${style.done}`
								: 'mdi mdi-check-circle-outline'
						}
					></span>{' '}
					Write
				</div>
				<div>
					<span
						className={
							speak
								? `mdi mdi-check-circle ${style.done}`
								: 'mdi mdi-check-circle-outline'
						}
					></span>{' '}
					Speak
				</div>
			</div>
		</div>
	);
};

export default () => {
	return (
		<div className={style.languagesContainer}>
			{languages.map((language) => (
				<Language
					key={language.name}
					name={language.name}
					description={language.description}
					read={language.read}
					write={language.write}
					speak={language.speak}
				/>
			))}
		</div>
	);
};
