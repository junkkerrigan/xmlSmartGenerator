import React, { FC } from "react";
import { GenerationPattern, GenerationStage, GenerationStageCaption } from "../components";

import { ConcreteGenerationStageProps } from "./types";

export const SpecifyPatternStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const { type, index, next } = props;
	return (
		<GenerationStage
			index={1}
			type='regular'
			next='a'
		>
			<GenerationStageCaption>
				Provide the pattern for your document
			</GenerationStageCaption>
			<GenerationPattern />
		</GenerationStage>
	)
};
