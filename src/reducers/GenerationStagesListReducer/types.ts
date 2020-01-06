import { Reducer } from "react";

import { GenerationStageName } from "../../components/Generator/logic";

export type AddStageAction = {
	type: 'ADD',
	stageToAdd: GenerationStageName,
};
export type RemoveStageAction = {
	type: 'REMOVE',
}
export type GenerationStagesListAction =
| AddStageAction
| RemoveStageAction;

export type GenerationStagesListReducer =
	Reducer<Array<GenerationStageName>, GenerationStagesListAction>;
