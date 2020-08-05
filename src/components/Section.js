import { useState } from 'preact/hooks';
import style from './Section.scss';

export default ({
	children,
	heading,
	id,
	sortOptions = [],
	handleOptionSelection = (idx) => {},
	select = 0,
}) => {
	const [open, setOpen] = useState();
	const [selected, setSelected] = useState(select);
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
							style={open ? { display: 'block' } : {}}
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
							{/* <div className={`${style.option} ${style.active}`}>1111</div> */}
						</div>
					</div>
				)}
			</div>
			<div className={style.child}>{children}</div>
		</div>
	);
};
