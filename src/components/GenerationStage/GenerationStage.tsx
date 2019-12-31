import React, { FC, useContext } from "react";
import { Slide } from "pure-react-carousel";
import { GeneratorContext } from "../../contexts";
import { ControlButtonsPanel } from "./ControlButtonsPanel";

import { GenerationStageProps } from './types';

export const GenerationStage: FC<GenerationStageProps> = (props: GenerationStageProps) => {
	const { setIsTransition } = useContext(GeneratorContext);
	const { children, index, type, ...otherProps } = props;
	return (
		<Slide
			index={index}
		>
			{children}
			<ControlButtonsPanel
				prev={type !== 'final'}
				next={type === 'regular'}
				generate={type === 'final'}
			/>
		</Slide>
	);
};
