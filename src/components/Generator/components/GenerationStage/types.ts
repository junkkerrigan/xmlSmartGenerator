import { ReactNode } from "react";
import { GenerationStageData } from "../../../../contexts";

export type GenerationStageType = 'first' | 'regular' | 'final';

export type GenerationStageProps =
	{ children?: ReactNode } & GenerationStageData;

