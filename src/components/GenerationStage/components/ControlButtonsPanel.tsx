import React, { FC, ReactElement } from "react";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdCheck } from "react-icons/all";
import { ControlButtonProps, ControlButtonsPanelProps } from "./types";

const ControlButton: FC<ControlButtonProps> = ({ type }: ControlButtonProps) => {
	let btn: ReactElement;
	const style: object = {
		color: 'white',
		fontSize: 25,
	};

	if (type === 'generate') {
		btn = (
			<button className='carousel-control-btn generate-btn'>
				Generate
				<MdCheck {...style} />
			</button>
		);
	} else if (type === 'prev') {
		btn = (
			<ButtonBack className='carousel-control-btn'>
				<>
					<MdKeyboardArrowLeft {...style} />
					Prev
				</>
			</ButtonBack>
		);
	} else {
		btn = (
			<ButtonNext className='carousel-control-btn'>
				<>
					Next
					<MdKeyboardArrowRight {...style} />
				</>
			</ButtonNext>
		);
	}

	return btn;
};

export const ControlButtonsPanel: FC<ControlButtonsPanelProps> = (props: ControlButtonsPanelProps) => {
	const { generate, next, prev } = props;
	return (
		<div className='carousel-control-panel'>
			{prev && <ControlButton type='prev' />}
			{next && <ControlButton type='next' />}
			{generate && <ControlButton type='generate' />}
		</div>
	);
};
