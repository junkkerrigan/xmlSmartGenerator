import { ReactNode } from "react";

export type GenerationStageType = 'first' | 'regular' | 'final';

export interface GenerationStageProps {
	children: ReactNode,
	index: number,
	type: GenerationStageType,
}
