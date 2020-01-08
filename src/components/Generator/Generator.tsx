import React, {FC, useContext, Component, ReactNode, useReducer} from "react";
import {CarouselProvider, Slider, WithStore} from 'pure-react-carousel'
import {UID, useUIDSeed} from 'react-uid';
import { GenerationStagesListProvider, GenerationStagesListContext } from '../../contexts';
import {GenerationStageName, getStageByName, initialStagesList} from "./logic";

import { CarouselInjectedProps } from "pure-react-carousel";
import { ConcreteGenerationStageProps } from "./generation-stages";
import { GenerationStageType } from "./components";

import './Generator.scss';
import {generationStagesListReducer} from "../../reducers/GenerationStagesListReducer";

const GeneratorSlider: FC = () => {
	const seed = useUIDSeed();
	const { stagesList } = useContext(GenerationStagesListContext);

	return (
		<Slider>
			{
				stagesList.map((value, index) => {
					const Stage = getStageByName(value);
					let stageType: GenerationStageType;
					if (index === 0) {
						stageType = 'first';
					} else if (index === stagesList.length - 1) {
						stageType = 'final';
					} else {
						stageType = 'regular';
					}
					const props: ConcreteGenerationStageProps = {
						index,
						stageType,
					};
					return (
						<Stage
							{...props}
							key={seed(Stage)}
						/>
					);
				})
			}
		</Slider>
	)
};

const Generator: FC = () => {
	const [ stagesList, stagesListDispatch ] = useReducer(
		generationStagesListReducer, initialStagesList
	);
	return (
		<GenerationStagesListContext.Provider
			value={{
				stagesList: stagesList,
				setStagesList: stagesListDispatch
			}}
		>
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={125}
				totalSlides={stagesList.length}
				dragEnabled={false}
			>
				<GeneratorSlider />
			</CarouselProvider>
		</GenerationStagesListContext.Provider>
	);
};

export { Generator };
