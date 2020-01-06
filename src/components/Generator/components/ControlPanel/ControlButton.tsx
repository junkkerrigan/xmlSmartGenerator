import React, { CSSProperties, FC, ReactElement, useContext } from "react";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdCheck } from "react-icons/all";
import { GenerationStageContext, GenerationStagesListContext } from "../../../../contexts";

import { ControlButtonProps } from "./types";
import { GenerationStageName } from "../../logic";

export const ControlButton: FC<ControlButtonProps>
	= ({ type }: ControlButtonProps) => {
	const { setStagesList } = useContext(GenerationStagesListContext);
	const { nextStage } = useContext(GenerationStageContext);

	let btn: ReactElement;
	let handleBtnClick: () => void;
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
		handleBtnClick = () => {
			setStagesList({
				type: 'REMOVE'
			})
		};
		btn = (
			<ButtonBack
				className='carousel-control-btn'
				onClick={handleBtnClick}
			>
				<>
					<MdKeyboardArrowLeft style={style} />
					Prev
				</>
			</ButtonBack>
		);
	} else {
		handleBtnClick = () => {
			setStagesList({
				type: 'ADD',
				stageToAdd: nextStage
			})
		};
		btn = (
			<ButtonNext
				className='carousel-control-btn'
				onClick={handleBtnClick}
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
