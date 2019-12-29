import {Dispatch, ReactNode, SetStateAction} from "react";

export interface IGeneratorContext {
	isTransition: boolean,
	setIsTransition: Dispatch<SetStateAction<boolean>>,
}

export interface GeneratorContextProviderProps {
	children?: ReactNode
}
