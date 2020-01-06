import { GenerationStageName } from "../components/Generator/logic";

export interface GenerationStageData {
	index: number,
	nextStage: GenerationStageName,
}
