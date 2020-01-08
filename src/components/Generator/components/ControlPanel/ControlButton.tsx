import React, {Component, CSSProperties, FC, ReactElement, ReactNode, useContext} from "react";
import {ButtonBack, ButtonNext, CarouselInjectedProps, WithStore} from "pure-react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdCheck } from "react-icons/all";
import { GenerationStageContext, GenerationStagesListContext } from "../../../../contexts";

import { ControlButtonProps } from "./types";

const ControlButton: FC<ControlButtonProps & CarouselInjectedProps>
	= ({ btnType, carouselStore }) => {
	const { setStagesList } = useContext(GenerationStagesListContext);
	const { onNextClick, onPrevClick } = useContext(GenerationStageContext);

	let btn: ReactElement;
	let handleBtnClick: () => void;
	const style: Partial<CSSProperties> = {
		color: 'white',
		fontSize: 25,
	};

	if (btnType === 'generate') {
		btn = (
			<button className='carousel-control-btn generate-btn'>
				Generate
				<MdCheck style={style} />
			</button>
		);
	} else if (btnType === 'prev') {
		handleBtnClick = () => {
			setStagesList({
				carouselStore,
				...onPrevClick
			});
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
				carouselStore,
				...onNextClick
			});
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

class ControlButtonClass extends Component<
	ControlButtonProps & CarouselInjectedProps
	> {
	public render(): ReactNode {
		return (
			<ControlButton {...this.props} />
		)
	}
}

const ControlButtonWithStore = WithStore(ControlButtonClass);

export { ControlButtonWithStore as ControlButton };
