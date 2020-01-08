import { createContext } from "react";
import { GenerationStageData } from "./types";

const defaultValue: GenerationStageData = {
	stageType: 'first',
	onPrevClick: {
		type: 'SKIP',
	},
	onNextClick: {
		type: 'SKIP',
	},
	index: 0,
};
export const GenerationStageContext = createContext<GenerationStageData>(defaultValue);
