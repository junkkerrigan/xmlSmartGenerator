import React, { FC } from "react";
import {GenerationCheckOption, GenerationStage, GenerationStageCaption, GenerationStageProps} from "../components";

import { ConcreteGenerationStageProps } from "./types";
import {GenerationStagesListAction} from "../../../reducers/GenerationStagesListReducer";

export const AdditionalOptionsStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const { index, stageType } = props;
	const onNextClick: GenerationStagesListAction = {
		type: 'SKIP',
	};
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
				Additional settings
			</GenerationStageCaption>
			<GenerationCheckOption
				value='1'
				onCheck={() => {}}
			>
				1sadasdsadasdas
			</GenerationCheckOption>
			<GenerationCheckOption
				value='2'
				onCheck={() => {}}
			>
				2jhgfdfghjkdasdas
			</GenerationCheckOption>
		</GenerationStage>
	)
};
