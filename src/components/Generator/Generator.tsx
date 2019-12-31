import React, { useState } from "react";
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { GeneratorContextProvider, GeneratorContext } from "../../contexts";
import { GenerationStage } from "../GenerationStage";
import { useUIDSeed } from "react-uid";

import { GeneratorProps } from './types';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './Generator.scss';

export const Generator: React.FC<GeneratorProps> = () => {
	const [ currentSlide, setCurrentSlide ] = useState<number>(0);
	const seed = useUIDSeed();

	return (
		<GeneratorContextProvider>
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={125}
				totalSlides={3}
			>
				<Slider>
					<GenerationStage
						index={0}
						type='first'
					>
					First here!
					</GenerationStage>
					<GenerationStage
						index={1}
						type='regular'
					>
						Well, second:)
					</GenerationStage>
					<GenerationStage
						index={2}
						type='final'
					>
						Third... here:(
					</GenerationStage>
				</Slider>
			</CarouselProvider>
		</GeneratorContextProvider>
	);
};
