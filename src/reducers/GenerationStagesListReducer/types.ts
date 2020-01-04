import { Dispatch, ReducerAction } from "react";

export type AddStageAction = {
	type: 'ADD',
	stageToAdd: string,
};
export type RemoveStageAction = {
	type: 'REMOVE',
}
export type GenerationStagesListAction =
| AddStageAction
| RemoveStageAction;

export type GenerationStagesListReducer =
	(state: Array<string>, action: GenerationStagesListAction) => Array<string>

export interface GenerationStagesListState {
	stagesList: Array<string>,
	setStagesList: Dispatch<ReducerAction<GenerationStagesListReducer>>
}
