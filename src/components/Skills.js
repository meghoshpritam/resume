import { useState, useEffect } from 'preact/hooks';
import style from './Skills.scss';

const Skill = ({
	title,
	description,
	icon,
	url,
	progress,
	active,
	open = false,
	setOpen = () => {},
}) => {
	return (
		<div className={style.skill}>
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
					<div className={style.progressBarContainer}>
						<div className={style.progressBar}>
							<div style={{ width: `${progress}%` }}></div>
						</div>
						<span className="mdi mdi-chevron-down" onClick={setOpen} />
					</div>
				</div>
			</div>
			<div
				className={
					open
						? `${style.description} ${style.descriptionDialog}`
						: `${style.description}`
				}
			>
				{description}
			</div>
		</div>
	);
};

export default ({ skills = [] }) => {
	const [open, setOpen] = useState(-1);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setOpen(-1);
		});
	}, []);

	return (
		<div className={style.skillsContainer}>
			{skills.map((skill, idx) => (
				<Skill
					key={skill.title}
					title={skill.title}
					description={skill.description}
					icon={skill.icon}
					url={skill.url}
					progress={skill.progress}
					active={skill.active}
					open={idx === open}
					setOpen={() => {
						if (idx !== open) setOpen(idx);
						else setOpen(-1);
					}}
				/>
			))}
		</div>
	);
};
