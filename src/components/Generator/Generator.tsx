import React, { FC, useContext } from "react";
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { GenerationStage, GenerationStageCaption,
	GenerationRadioOption, GenerationPattern, GenerationCheckOption } from "./components";
import { GenerationStagesListProvider, GenerationStagesListContext } from '../../contexts';

import { GenerationStagesListState } from '../../contexts';

import './Generator.scss';

const Generator: FC = () => {
	const { stagesList } = useContext<GenerationStagesListState>(GenerationStagesListContext);

	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={125}
			totalSlides={stagesList.length}
			dragEnabled={false}
		>
			<Slider>

				<GenerationStage
					index={2}
					type='final'
					next='b'
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
