import React, { FC, useContext } from "react";
import { CarouselItem } from "reactstrap";
import { GeneratorContext } from "../../contexts";

export const GenerationStage: FC = ({ children }) => {
	const { setIsTransition } = useContext(GeneratorContext);

	return (
		<CarouselItem
			onExiting={() => setIsTransition(true)}
			onExited={() => setIsTransition(false)}
			key={}
		>

		</CarouselItem>
	);
};
