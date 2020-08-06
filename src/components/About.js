import style from './About.scss';

export default () => {
	const today = new Date();
	return (
		<div className={style.aboutContainer}>
			{`${
				today.getMonth() >= 5
					? today.getFullYear() - 1999
					: today.getFullYear() - 2000
			}
			-year-olds self tough programmer. `}
			A student of Computer Science (⚠️ not Computer Science &{' '}
			<strong>Engineering</strong>).
			<p>
				Love to <span className={style.highlight}>code</span>, learning new{' '}
				<span className={style.highlight}>technologies</span>,{' '}
				<span className={style.highlight}>open-source projects</span> and
				spending time to explore new{' '}
				<span className={style.highlight}>JS library/framework</span> 😁.
			</p>
			<p>
				Like to listing <span className={style.highlight}>music</span> 🎵,
				watching <span className={style.highlight}>movies</span> 🎥, and watch
				some <span className={style.highlight}>news</span> 📰, but don't have
				any favourite singer, singer or player.
			</p>
			<p>
				Currently, spending time on social media sites and waiting to get
				normalizing the situation of Covid-19.
			</p>
		</div>
	);
};
