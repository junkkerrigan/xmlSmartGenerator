import React, { FC } from "react";
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { GenerationStage, GenerationStageCaption,
	GenerationRadioOption, GenerationPattern, GenerationCheckOption } from "./components";

import './Generator.scss';

export const Generator: FC = () => {
	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={125}
			totalSlides={3}
			dragEnabled={false}
		>
			<Slider>
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
