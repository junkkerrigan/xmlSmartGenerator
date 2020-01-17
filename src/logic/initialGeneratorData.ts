import {
	AdditionalOptionsDependencies, ChooseSourceDependencies, GenerationStageDependencies,
	GenerationStageName, SpecifyPatternDependencies
} from "./types";

export const initialStagesList: Array<GenerationStageName> = [
	'chooseSource', 'additionalOptions',
];

export const initialDependencies: Array<GenerationStageDependencies> = [
	{ source: 'random' } as ChooseSourceDependencies,
	{ } as SpecifyPatternDependencies,
	{ } as AdditionalOptionsDependencies
];
