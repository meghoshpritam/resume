import { h } from 'preact';
import style from './Main.scss';
import img from '../../assets/img.jpg';

export default () => {
	return (
		<div className={style.container}>
			<div className={style.head}>
				<div className={style.imgContainer}>
					<div className={style.ring}>
						<img src={img} alt="avatar" className={style.avatarImg} />
					</div>
				</div>
				<div className={style.heading}>
					<h1>
						<div className={style.primary}>Pritam Ghosh</div>
						<div className={style.secondary}>@meghoshpritam</div>
					</h1>
					<h2>Junior Web Developer</h2>
					<p>
						<span className="mdi mdi-map-marker-outline"></span> West Bengal,
						India
					</p>
				</div>
			</div>
			<div className={style.callToAction}>
				<a
					href="https://twitter.com/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<span className="mdi mdi-twitter"></span>
				</a>
				<a
					href="https://facebook.com/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<span className="mdi mdi-facebook"></span>
				</a>
				<a
					href="https://instagram.com/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<span className="mdi mdi-instagram"></span>
				</a>
				<a
					href="https://www.linkedin.com/in/meghoshpritam/"
					className={style.icon}
					target="_blank"
				>
					<span className="mdi mdi-linkedin"></span>
				</a>
				<a
					href="https://github.com/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<span className="mdi mdi-github"></span>
				</a>
				<a
					href="https://t.me/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<span className="mdi mdi-telegram"></span>
				</a>
			</div>
			<span
				className={`mdi mdi-chevron-down ${style.expandMore}`}
				onClick={() => window.location.replace('/#skills')}
			></span>
		</div>
	);
};
