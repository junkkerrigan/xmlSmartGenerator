import React, { createContext } from "react";
import { GenerationStagesListState } from './types';

const defaultValue: GenerationStagesListState = {
	stagesList: [],
	setStagesList: () => {}
};

export const GenerationStagesListContext
	= createContext<GenerationStagesListState>(defaultValue);
