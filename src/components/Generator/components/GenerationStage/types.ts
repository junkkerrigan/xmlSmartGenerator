import { ReactNode } from "react";
import { GenerationStageName } from "../../logic";

export type GenerationStageType = 'first' | 'regular' | 'final';

export interface GenerationStageProps {
	children: ReactNode,
	nextStage: GenerationStageName,
	index: number,
	type: GenerationStageType,
}
