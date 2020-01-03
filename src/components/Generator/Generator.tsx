import React, { useState } from "react";
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { GenerationStage, GenerationStageCaption,
	GenerationOptionRadio, GenerationPattern } from "../GenerationStage";
import { useUIDSeed } from "react-uid";

import { GeneratorProps } from './types';

import './Generator.scss';

export const Generator: React.FC<GeneratorProps> = () => {
	const [ currentSlide, setCurrentSlide ] = useState<number>(0);
	const seed = useUIDSeed();

	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={125}
			totalSlides={3}
			dragEnabled={false}
		>
			<Slider>
				<GenerationStage
					index={0}
					type='first'
				>
					<GenerationStageCaption>
						Choose source for your XML
					</GenerationStageCaption>
					<GenerationOptionRadio
						name='source'
						value='random'
					>
						Generate random document
					</GenerationOptionRadio>
					<GenerationOptionRadio
						name='source'
						value='pattern'
					>
						Specify the pattern
					</GenerationOptionRadio>
				</GenerationStage>
				<GenerationStage
					index={1}
					type='regular'
				>
					<GenerationStageCaption>
						Provide the pattern for your document
					</GenerationStageCaption>
					<GenerationPattern />
				</GenerationStage>
				<GenerationStage
					index={2}
					type='final'
				>
					Third... here:(
				</GenerationStage>
			</Slider>
		</CarouselProvider>
	);
};
