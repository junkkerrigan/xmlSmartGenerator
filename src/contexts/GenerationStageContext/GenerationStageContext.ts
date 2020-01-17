import { createContext } from "react";
import { GenerationStageContextData } from "./types";

const defaultValue: GenerationStageContextData = {
	index: 0,
	onTransition: {
		toNext: () => {
			console.log('required default value seems useless for me');
		},
		toPrev: () => {
			console.log('required default value seems useless for me');
		},
	}
};
export const GenerationStageContext =
	createContext<GenerationStageContextData>(defaultValue);
