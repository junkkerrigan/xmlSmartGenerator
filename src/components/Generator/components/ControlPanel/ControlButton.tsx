import React, { CSSProperties, FC, ReactElement, useContext } from "react";
import {ButtonBack, ButtonNext } from "pure-react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdCheck } from "react-icons/all";

import { ControlButtonProps } from "./types";
import {GenerationStageContext} from "../../../../contexts/GenerationStageContext";

export const ControlButton:  FC<ControlButtonProps>
	= (props) => {
	const { btnType } = props;
	let btn: ReactElement;
	const style: Partial<CSSProperties> = {
		color: 'white',
		fontSize: 25,
	};

	const {
		onTransition: {
			toNext, toPrev
		}
	} = useContext(GenerationStageContext);
	if (btnType === 'generate') {
		btn = (
			<button className='carousel-control-btn generate-btn'>
				Generate
				<MdCheck style={style} />
			</button>
		);
	} else if (btnType === 'prev') {
		btn = (
			<ButtonBack
				className='carousel-control-btn'
				onClick={toPrev}
			>
				<>
					<MdKeyboardArrowLeft style={style} />
					Prev
				</>
			</ButtonBack>
		);
	} else {
		btn = (
			<ButtonNext
				className='carousel-control-btn'
				onClick={toNext}
			>
				<>
					Next
					<MdKeyboardArrowRight style={style} />
				</>
			</ButtonNext>
		);
	}

	return btn;
};
