import React, { FC } from "react";
import { ControlButton } from './ControlButton';

import { ControlButtonsPanelProps } from "./types";

import './ControlPanel.scss';

export const ControlPanel: FC<ControlButtonsPanelProps> = (props: ControlButtonsPanelProps) => {
	const { generate, next, prev } = props;
	return (
		<div className='carousel-control-panel'>
			{prev && <ControlButton btnType='prev' />}
			{next && <ControlButton btnType='next' />}
			{generate && <ControlButton btnType='generate' />}
		</div>
	);
};
