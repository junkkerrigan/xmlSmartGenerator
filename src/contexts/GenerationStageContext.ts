import React, { createContext } from "react";
import { GenerationStageData } from "./types";

const defaultValue: GenerationStageData = {
	index: 0,
	nextStage: '',
};
export const GenerationStageContext = createContext<GenerationStageData>(defaultValue);
