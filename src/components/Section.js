import { useState, useEffect, useRef } from 'preact/hooks';
import style from './Section.scss';

export default ({
	children,
	heading,
	id,
	sortOptions = [],
	handleOptionSelection = (idx) => {},
	select = 0,
}) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(select);
	const childRef = useRef(null);
	const listRef = useRef(null);

	const [height, setHeight] = useState(0);
	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			if (
				open &&
				listRef.current &&
				e.target.scrollingElement.scrollTop >
					childRef.current.offsetTop +
						childRef.current.offsetHeight -
						listRef.current.offsetHeight
			)
				setOpen(false);
		});
	});
	return (
		<div className={style.container} id={id}>
			<div className={style.heading}>
				<a href={`/#${id}`}>{heading}</a>
				{sortOptions.length !== 0 && (
					<div className={style.dropdown}>
						<span
							className={`${style.sortIcon} mdi mdi-sort`}
							onClick={() => setOpen(!open)}
						></span>
						<div
							className={style.dropdownContent}
							style={open ? { display: 'block' } : { display: 'none' }}
							ref={listRef}
						>
							{sortOptions.map((option, idx) => (
								<div
									className={`${style.option} ${
										idx === selected && `${style.active}`
									}`}
									key={option}
									onClick={() => {
										handleOptionSelection(idx);
										setSelected(idx);
										setOpen(false);
									}}
								>
									{option}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
			<div className={style.child} ref={childRef}>
				{children}
			</div>
		</div>
	);
};
