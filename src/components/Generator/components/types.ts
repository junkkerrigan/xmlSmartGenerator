import { ChangeEvent, ReactNode } from "react";

interface GenerationOptionProps {
	defaultChecked?: boolean,
	value: string,
	children: ReactNode,
	onCheck: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface GenerationRadioOptionProps extends GenerationOptionProps {
	name: string,
}

export interface GenerationCheckOptionProps extends GenerationOptionProps {
}

export interface GenerationStageCaptionProps {
	children: ReactNode,
}
