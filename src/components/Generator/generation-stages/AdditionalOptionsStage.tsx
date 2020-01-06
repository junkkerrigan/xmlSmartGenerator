import React, { FC } from "react";
import { GenerationCheckOption, GenerationStage, GenerationStageCaption } from "../components";

import { ConcreteGenerationStageProps } from "./types";

export const AdditionalOptionsStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	return (
		<GenerationStage
			nextStage=''
			{...props}
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
