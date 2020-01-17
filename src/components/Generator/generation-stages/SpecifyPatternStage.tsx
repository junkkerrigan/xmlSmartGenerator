import React, { FC } from "react";
import {
	GenerationPattern, GenerationStage, GenerationStageCaption,
	GenerationStageProps
} from "../components";
import { generatorStore } from "../../../store/GeneratorStore";

import { ConcreteGenerationStageProps } from "./types";

export const SpecifyPatternStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const generationStageProps: GenerationStageProps = {
		onTransition: {
			toPrev: {
				callback: (carouselStore) => {
					generatorStore.handleStageChange(
						'prev',
					);
					carouselStore.setStoreState({
						totalSlides: generatorStore.stagesList.length,
						currentSlide: generatorStore.currentStageIdx,
					})
				},
				isDelayNeeded: true
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
				Provide the pattern for your document
			</GenerationStageCaption>
			<GenerationPattern />
		</GenerationStage>
	)
};
