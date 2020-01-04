import React, { createContext } from "react";

const defaultValue: Array<string> = ['source'];

export const GenerationStagesListContext
	= createContext<Array<string>>(defaultValue);
