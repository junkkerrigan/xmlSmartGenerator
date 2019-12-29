import React, { ReactElement, ReactNode, useState } from "react";

import { IGeneratorContext } from "./types";

const defaultContext: IGeneratorContext = {
	isTransition: false,
	setIsTransition: () => {}
};

export const GeneratorContext = React.createContext<IGeneratorContext>(defaultContext);
