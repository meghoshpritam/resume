import { h } from 'preact';
import style from './Educations.scss';

const educations = [
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

const Education = ({
	from,
	to,
	institutionName,
	location,
	under,
	degree,
	specialization,
}) => {
	return (
		<div className={style.education}>
			<div className={style.time}>
				<div className={style.from}>
					{from.month} <span>{from.year}</span>
				</div>
				<div className={style.to}>
					{to.month} <span>{to.year}</span>
				</div>
			</div>

			<div className={style.institutionName}>{institutionName}</div>
			<div className={style.details}>
				<div className={style.location}>
					<span className="mdi mdi-map-marker"></span>
					{location}
				</div>
				<div className={style.under}>{under}</div>
				<div className={style.course}>{degree}</div>
				<div className={style.specialization}>
					<span className="mdi mdi-school"></span> {specialization}
				</div>
			</div>
		</div>
	);
};

export default () => {
	return (
		<div className={style.educationsContainer}>
			{educations.map((education) => (
				<Education
					key={education.institutionName}
					from={education.from}
					to={education.to}
					institutionName={education.institutionName}
					location={education.location}
					under={education.under}
					degree={education.degree}
					specialization={education.specialization}
				/>
			))}
		</div>
	);
};
