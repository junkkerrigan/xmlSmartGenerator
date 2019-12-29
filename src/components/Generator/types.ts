import React from "react";

export interface GeneratorProps {

}

export interface IGenerator {
	isTransition: boolean,
	currentSlide: number,
	slidesNum: number,
}

export interface GeneratorState {
	generator: IGenerator,
	setGenerator: React.Dispatch<React.SetStateAction<IGenerator>>,
}
