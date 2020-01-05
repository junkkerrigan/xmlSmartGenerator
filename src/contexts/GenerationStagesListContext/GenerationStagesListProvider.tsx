import React, { useReducer, FC } from "react";
import { GenerationStagesListContext } from './GenerationStagesListContext';
import { GenerationStagesListReducer, generationStagesListReducer } from '../../reducers';

export const GenerationStagesListProvider: FC = ({ children }) => {
	const initialValue: Array<string> = ['source'];
	const [ stagesList, stagesListDispatch ] = useReducer<GenerationStagesListReducer>(
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

