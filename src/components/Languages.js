import { h } from 'preact';
import style from './Languages.scss';
import { languages } from '../data';

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
