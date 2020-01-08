import React, { useReducer, FC } from "react";
import { GenerationStagesListContext } from './GenerationStagesListContext';
import { generationStagesListReducer } from '../../reducers';
import { initialStagesList } from '../../components/Generator/logic'

export const GenerationStagesListProvider: FC = ({ children }) => {
	const [ stagesList, stagesListDispatch ] = useReducer(
		generationStagesListReducer, initialStagesList
	);
	console.log(stagesList);
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

