import React, { ChangeEvent, FC, useState } from "react";
import { GenerationRadioOption, GenerationStage, GenerationStageCaption } from '../components';

import { NextStage } from "../components";
import { ConcreteGenerationStageProps } from "./types";

export const ChooseSourceStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const [ nextStage, setNextStage ] = useState<NextStage>('random');

	const handleOptionCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setNextStage(value);
	};

	return (
		<GenerationStage
			next={nextStage}
			{...props}
		>
			<GenerationStageCaption>
				Choose source for your XML
			</GenerationStageCaption>
			<GenerationRadioOption
				name='source'
				value='random'
				defaultChecked
				onCheck={handleOptionCheck}
			>
				Generate random document
			</GenerationRadioOption>
			<GenerationRadioOption
				name='source'
				value='pattern'
				onCheck={handleOptionCheck}
			>
				Specify the pattern
			</GenerationRadioOption>
		</GenerationStage>
	)
};
