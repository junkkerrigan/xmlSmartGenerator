import { Dispatch, ReducerAction } from "react";
import { GenerationStagesListReducer } from "../../reducers";

export interface GenerationStagesListState {
	stagesList: Array<string>,
	setStagesList: Dispatch<ReducerAction<GenerationStagesListReducer>>
}
