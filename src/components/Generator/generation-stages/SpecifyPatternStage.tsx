import React, { FC } from "react";
import { GenerationPattern, GenerationStage, GenerationStageCaption } from "../components";

import { ConcreteGenerationStageProps } from "./types";

export const SpecifyPatternStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	return (
		<GenerationStage
			nextStage='additionalOptions'
			{...props}
		>
			<GenerationStageCaption>
				Provide the pattern for your document
			</GenerationStageCaption>
			<GenerationPattern />
		</GenerationStage>
	)
};
