import React, { CSSProperties, FC, ReactElement } from "react";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdCheck } from "react-icons/all";

import { ControlButtonProps } from "./types";

export const ControlButton: FC<ControlButtonProps> = ({ type }: ControlButtonProps) => {
	let btn: ReactElement;
	const style: Partial<CSSProperties> = {
		color: 'white',
		fontSize: 25,
	};

	if (type === 'generate') {
		btn = (
			<button className='carousel-control-btn generate-btn'>
				Generate
				<MdCheck style={style} />
			</button>
		);
	} else if (type === 'prev') {
		btn = (
			<ButtonBack className='carousel-control-btn'>
				<>
					<MdKeyboardArrowLeft style={style} />
					Prev
				</>
			</ButtonBack>
		);
	} else {
		btn = (
			<ButtonNext className='carousel-control-btn'>
				<>
					Next
					<MdKeyboardArrowRight style={style} />
				</>
			</ButtonNext>
		);
	}

	return btn;
};
