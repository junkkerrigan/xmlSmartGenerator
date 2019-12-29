import React, {ReactElement, ReactNode, useState} from "react";
import { Carousel } from "reactstrap";
import { GeneratorContext, GeneratorContextProvider } from "../../contexts";

import { GeneratorProps, IGenerator } from './types';

import './Generator.scss';

export const Generator: React.FC<GeneratorProps> = () => {
	const defaultGenerator: IGenerator = {
		currentSlide: 0,
		isTransition: false,
		slidesNum: 1,
	};
	const [ generatorState, setGeneratorState ] =
		useState<IGenerator>(defaultGenerator);

	const next = () => {
		const { slidesNum, isTransition, currentSlide } = generatorState;

		if (isTransition) return;
		const nextSlide =
			(currentSlide === slidesNum - 1)
			? 0
			: currentSlide + 1;
		setGeneratorState({
			...generatorState,
			currentSlide: nextSlide,
		});
	};

	const prev = () => {
		const { slidesNum, isTransition, currentSlide } = generatorState;

		if (isTransition) return;
		const prevSlide =
			(currentSlide === 0)
				? slidesNum - 1
				: currentSlide - 1;
		setGeneratorState({
			...generatorState,
			currentSlide: prevSlide,
		});
	};

	return (
		<GeneratorContextProvider>
			<Carousel
				next={next}
				previous={prev}
			>
			</Carousel>
		</GeneratorContextProvider>
	);
};
