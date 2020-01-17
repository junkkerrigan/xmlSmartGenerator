import React, { ChangeEvent, FC } from "react";
import {
	GenerationRadioOption, GenerationStage, GenerationStageCaption, GenerationStageProps,
} from '../components';
import { generatorStore } from '../../../store';

import { ConcreteGenerationStageProps } from "./types";
import { ChooseSourceDependencies } from "../../../logic";

export const ChooseSourceStage: FC<ConcreteGenerationStageProps>
	= (props: ConcreteGenerationStageProps) => {
	const { index } = props;
	const handleOptionCheck = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (value === 'random') {
			generatorStore.dependencies[index] = {
				source: 'random'
 			} as ChooseSourceDependencies;
		} else {
			generatorStore.dependencies[index] = {
				source: 'pattern'
			} as ChooseSourceDependencies;
		}
	};

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
					currentSlide: generatorStore.currentStageIdx
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
