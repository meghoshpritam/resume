import { h, useEffect } from 'preact';
import style from './Main.scss';
import twitterIcon from '../../assets/icons/twitter.svg';
import linkedInIcon from '../../assets/icons/linkedIn.svg';
import gitHubIcon from '../../assets/icons/gitHub.svg';
import telegramIcon from '../../assets/icons/telegram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
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
						<span className="material-icons">place</span> West Bengal, India
					</p>
				</div>
			</div>
			<div className={style.callToAction}>
				<a
					href="https://twitter.com/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<img src={facebookIcon} alt="facebook-handel" />
				</a>
				<a
					href="https://twitter.com/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<img src={twitterIcon} alt="twitter-handel" />
				</a>

				<a
					href="https://www.linkedin.com/in/meghoshpritam/"
					className={style.icon}
					target="_blank"
				>
					<img src={linkedInIcon} alt="linkedIn-handel" />
				</a>
				<a
					href="https://github.com/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<img src={gitHubIcon} alt="gitHub-handel" />
				</a>
				<a
					href="https://t.me/meghoshpritam"
					className={style.icon}
					target="_blank"
				>
					<img src={telegramIcon} alt="telegram-handel" />
				</a>
			</div>
			<span className={`material-icons ${style.expandMore}`}>expand_more</span>
		</div>
	);
};
