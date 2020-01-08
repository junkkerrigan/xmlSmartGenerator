import React, { FC } from "react";
import {GenerationPattern, GenerationStage, GenerationStageCaption, GenerationStageProps} from "../components";

import { ConcreteGenerationStageProps } from "./types";
import {GenerationStagesListAction} from "../../../reducers/GenerationStagesListReducer";

export const SpecifyPatternStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const { index, stageType } = props;
	const onNextClick: GenerationStagesListAction = {
		type: 'SKIP',
	};
	const onPrevClick: GenerationStagesListAction = {
		type: 'REMOVE',
		index,
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
				Provide the pattern for your document
			</GenerationStageCaption>
			<GenerationPattern />
		</GenerationStage>
	)
};
