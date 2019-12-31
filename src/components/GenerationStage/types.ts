import { ReactNode } from "react";

export type GenerationStageType = 'first' | 'regular' | 'final';

export interface GenerationStageProps {
	children: ReactNode,
	index: number,
	type: GenerationStageType,
}

export interface ControlButtonsPanelProps {
	next?: boolean,
	prev?: boolean,
	generate?: boolean
}

export interface ControlButtonProps {
	type: 'next' | 'prev' | 'generate',
}
