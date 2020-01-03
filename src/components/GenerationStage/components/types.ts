import { ReactNode } from "react";

export interface ControlButtonsPanelProps {
	next?: boolean,
	prev?: boolean,
	generate?: boolean
}

export interface ControlButtonProps {
	type: 'next' | 'prev' | 'generate',
}

export interface GenerationOptionProps {
	name: string,
	value: string,
	children: ReactNode,
}

export interface GenerationStageCaptionProps {
	children: ReactNode,
}
