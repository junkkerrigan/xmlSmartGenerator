import { ReactNode } from "react";

export interface ControlButtonsPanelProps {
	next?: boolean,
	prev?: boolean,
	generate?: boolean
}

export interface ControlButtonProps {
	type: 'next' | 'prev' | 'generate',
}

interface GenerationOptionProps {
	checked?: boolean,
	value: string,
	children: ReactNode,
}

export interface GenerationRadioOptionProps extends GenerationOptionProps {
	name: string,
}

export interface GenerationCheckOptionProps extends GenerationOptionProps {
}

export interface GenerationStageCaptionProps {
	children: ReactNode,
}
