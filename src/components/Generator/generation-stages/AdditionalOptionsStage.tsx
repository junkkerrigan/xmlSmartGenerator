import React, { FC } from "react";
import {
	GenerationCheckOption, GenerationStage, GenerationStageCaption,
	GenerationStageProps
} from "../components";
import { generatorStore } from "../../../store/GeneratorStore";

import { ConcreteGenerationStageProps } from "./types";

export const AdditionalOptionsStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const generationStageProps: GenerationStageProps = {
		onTransition: {
			toPrev: (carouselStore) => {
				generatorStore.handleStageChange(
					'prev',
				);
				carouselStore.setStoreState({
					totalSlides: generatorStore.stagesList.length,
					currentSlide: generatorStore.currentStageIdx,
				})
			},
			toNext: (carouselStore) => {
				generatorStore.handleStageChange(
					'next',
				);
				carouselStore.setStoreState({
					totalSlides: generatorStore.stagesList.length,
					currentSlide: generatorStore.currentStageIdx,
				})
			}
		},
		...props
	};
	return (
		<GenerationStage
			{...generationStageProps}
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
