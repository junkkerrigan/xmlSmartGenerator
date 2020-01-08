import React, {ChangeEvent, FC, useContext, useState} from "react";
import {
	GenerationRadioOption,
	GenerationStage,
	GenerationStageCaption,
	GenerationStageProps,
	GenerationStageType
} from '../components';

import { GenerationStageName } from "../logic";
import { ConcreteGenerationStageProps } from "./types";
import {GenerationStagesListContext} from "../../../contexts/GenerationStagesListContext";
import {GenerationStagesListAction} from "../../../reducers/GenerationStagesListReducer";

export const ChooseSourceStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const [ nextStage, setNextStage ] = useState<GenerationStageName>(
		'additionalOptions');
	const handleOptionCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (value === 'random') setNextStage('additionalOptions');
		else setNextStage('specifyPattern');
	};

	const { index, stageType } = props;
	let onNextClick: GenerationStagesListAction;
	if (nextStage === 'additionalOptions') {
		onNextClick = {
			type: 'SKIP'
		};
	} else {
		onNextClick = {
			type: 'INSERT',
			stageName: nextStage,
			index: index + 1,
		};
	}
	const onPrevClick: GenerationStagesListAction = {
		type: 'SKIP',
	};
	const stageProps: GenerationStageProps = {
		index,
		stageType,
		onNextClick,
		onPrevClick,
	};

	return (
		<GenerationStage
			{...stageProps}
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
