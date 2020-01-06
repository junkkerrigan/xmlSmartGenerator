import React, { FC } from "react";
import { Slide } from "pure-react-carousel";
import { ControlPanel } from "../ControlPanel";
import { GenerationStageContext } from "../../../../contexts";

import { GenerationStageData } from "../../../../contexts";
import { GenerationStageProps } from './types';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './GenerationStage.scss';

export const GenerationStage: FC<GenerationStageProps> = (props: GenerationStageProps) => {
	const { children, index, type, nextStage } = props;
	const providerValue: GenerationStageData  = {
		index,
		nextStage
	};

	return (
		<GenerationStageContext.Provider value={providerValue}>
			<Slide
				index={index}
				innerClassName='disable-outline'
			>
				{children}
				<ControlPanel
					prev={type !== 'first'}
					next={type !== 'final'}
					generate={type === 'final'}
				/>
			</Slide>
		</GenerationStageContext.Provider>
	);
};
