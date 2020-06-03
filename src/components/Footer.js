import { h } from 'preact';
import style from './Footer.scss';

export default () => {
	return (
		<footer className={style.footer}>
			Build with{' '}
			<a href="https://preactjs.com/" className={style.link}>
				Preact.js
			</a>{' '}
			and{' '}
			<a href="https://sass-lang.com/" className={style.link}>
				SCSS
			</a>
		</footer>
	);
};
