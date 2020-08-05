import { h } from 'preact';
import style from './Skills.scss';

const Skill = ({ title, description, icon, url, progress, active }) => {
	return (
		<>
			<div
				className={style.skill}
				// style={`--cursor: ${url !== '#' ? 'pointer' : 'default'}`}
			>
				<div>
					<div className={style.logo}>
						<img src={icon} alt={`${title}-icon`} className={style.icon} />
						{active ? <span className={style.active} /> : <span />}
					</div>
					<div>
						<div className={style.title}>
							{url !== '#' ? (
								<a href={url} target="_blank">
									{title}
								</a>
							) : (
								<> {title}</>
							)}
						</div>
						<div className={style.progressBar}>
							<div style={{ width: `${progress}%` }}></div>
						</div>
					</div>
				</div>
				<div className={style.description}>{description}</div>
			</div>
		</>
	);
};

export default ({ skills = [] }) => {
	return (
		<div className={style.skillsContainer}>
			{skills.map((skill) => (
				<Skill
					key={skill.title}
					title={skill.title}
					description={skill.description}
					icon={skill.icon}
					url={skill.url}
					progress={skill.progress}
					active={skill.active}
				/>
			))}
		</div>
	);
};
