import React, { useReducer, FC } from "react";
import { GenerationStagesListContext } from './GenerationStagesListContext';
import { generationStagesListReducer } from '../../reducers';

import { GenerationStageName } from "../../components/Generator/logic";

export const GenerationStagesListProvider: FC = ({ children }) => {
	const initialValue: Array<GenerationStageName> = ['chooseSource'];
	const [ stagesList, stagesListDispatch ] = useReducer(
		generationStagesListReducer, initialValue
	);

	return (
		<GenerationStagesListContext.Provider
			value={{
				stagesList: stagesList,
				setStagesList: stagesListDispatch
			}}
		>
			{children}
		</GenerationStagesListContext.Provider>
	);
};

