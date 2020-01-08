import { GenerationStagesListAction } from "../../reducers";
import { GenerationStageType } from "../../components/Generator/components";

export type GenerationStageData = {
	index: number,
	stageType: GenerationStageType,
	onNextClick: GenerationStagesListAction,
	onPrevClick: GenerationStagesListAction
}
