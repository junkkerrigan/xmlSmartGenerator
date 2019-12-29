import React, { ReactElement, useState } from "react";
import { GeneratorContext  } from './GeneratorContext';

import { GeneratorContextProviderProps } from "./types";

export const GeneratorContextProvider = (
	props: GeneratorContextProviderProps
) : ReactElement => {
	const [ isTransition, setIsTransition ] = useState<boolean>(false);
	return (
		<GeneratorContext.Provider value={{
			isTransition,
			setIsTransition
		}}>
			{props.children}
		</GeneratorContext.Provider>
	)
};
