import React, { FC, ReactElement } from "react";
import { ButtonBack, ButtonNext } from "pure-react-carousel";
import { FaCheckCircle, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { ControlButtonProps, ControlButtonsPanelProps } from "./types";

const ControlButton: FC<ControlButtonProps> = ({ type }: ControlButtonProps) => {
	let btn: ReactElement;
	if (type === 'generate') {
		btn = (
			<button className='carousel-control-btn'>
				Generate
				<FaCheckCircle
					color='white'
					fontSize='40px'
				/>
			</button>
		);
	} else if (type === 'next') {
		btn = (
			<ButtonBack className='carousel-control-btn'>
				<>
					<FaAngleLeft
						color='white'
						fontSize='40px'
					/>
					Prev
				</>
			</ButtonBack>
		);
	} else {
		btn = (
			<ButtonNext className='carousel-control-btn'>
				<>
					Next
					<FaAngleRight
						color='white'
						fontSize='40px'
					/>
				</>
			</ButtonNext>
		);
	}

	return btn;
};

export const ControlButtonsPanel: FC<ControlButtonsPanelProps> = (props: ControlButtonsPanelProps) => {
	const { generate, next, prev } = props;
	return (
		<div>
			{generate && <ControlButton type='generate' />}
			{prev && <ControlButton type='prev' />}
			{next && <ControlButton type='next' />}
		</div>
	);
};
