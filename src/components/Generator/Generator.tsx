import React, { FC, useContext } from "react";
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { useUIDSeed } from 'react-uid';
import { GenerationStagesListProvider, GenerationStagesListContext } from '../../contexts';
import { getStageByName } from "./logic";

import { ConcreteGenerationStageProps } from "./generation-stages";
import { GenerationStageType } from "./components";

import './Generator.scss';

const Generator: FC = () => {
	const { stagesList } = useContext(GenerationStagesListContext);
	const seed = useUIDSeed();
	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={125}
			// change slides number in smart way
			// change state with HOC
			totalSlides={stagesList.length + 1}
			dragEnabled={false}
		>
			<Slider>
				{
					stagesList.map((value, index) => {
						const Stage = getStageByName(value);
						let type: GenerationStageType;
						if (index === 0) {
							type = 'first';
						} else if (index === stagesList.length - 1) {
							type = 'final';
						} else {
							type = 'regular';
						}
						const props: ConcreteGenerationStageProps = {
							index,
							type
						};
						return (
							<Stage
								{...props}
								key={seed(Stage)}
							/>
						);
					})
				}
				{/*<ChooseSourceStage*/}
				{/*	index={0}*/}
				{/*	type='first'*/}
				{/*/>*/}
				{/*<SpecifyPatternStage*/}
				{/*	index={1}*/}
				{/*	type='regular'*/}
				{/*/>*/}
				{/*<AdditionalOptionsStage*/}
				{/*	index={2}*/}
				{/*	type='regular'*/}
				{/*/>*/}
			</Slider>
		</CarouselProvider>
	);
};

const GeneratorWithProvider: FC = () => {
	return (
		<GenerationStagesListProvider>
			<Generator />
		</GenerationStagesListProvider>
	);
};

export { GeneratorWithProvider as Generator };
