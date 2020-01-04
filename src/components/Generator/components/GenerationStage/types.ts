import { ReactNode } from "react";

export type GenerationStageType = 'first' | 'regular' | 'final';

export type NextStage = string | null;

export interface GenerationStageProps {
	children: ReactNode,
	next: NextStage,
	index: number,
	type: GenerationStageType,
}
