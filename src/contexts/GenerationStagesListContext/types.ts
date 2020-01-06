import { Dispatch, ReducerAction } from "react";
import { GenerationStagesListReducer } from "../../reducers";

import { GenerationStageName } from "../../components/Generator/logic";

export interface GenerationStagesListState {
	stagesList: Array<GenerationStageName>,
	setStagesList: Dispatch<ReducerAction<GenerationStagesListReducer>>
}
