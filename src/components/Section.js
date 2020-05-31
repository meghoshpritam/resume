import { h } from 'preact';
import style from './Section.scss';

export default ({ children, heading, id }) => {
	return (
		<div className={style.container} id={id}>
			<div className={style.heading}>{heading}</div>
			<div className={style.child}>{children}</div>
		</div>
	);
};
