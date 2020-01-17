export type GenerationStageName =
| 'chooseSource'
| 'specifyPattern'
| 'additionalOptions';

export interface ChooseSourceDependencies {
	source: 'pattern' | 'random'
}
export interface SpecifyPatternDependencies { }
export interface AdditionalOptionsDependencies { }

export type GenerationStageDependencies =
  | ChooseSourceDependencies
  | SpecifyPatternDependencies
  | AdditionalOptionsDependencies;

export interface StageTransitionResponse {
	stagesList: Array<GenerationStageName>
	currentStageIdx: number,
}

export type StageTransitionResponseEvaluator = (
	dependencies: GenerationStageDependencies,
	stagesList: Array<GenerationStageName>,
	currentStageIdx: number,
	transitionTo: 'prev' | 'next'
) => StageTransitionResponse;
