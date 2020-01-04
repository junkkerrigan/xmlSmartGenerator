import { ReactNode } from "react";

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
