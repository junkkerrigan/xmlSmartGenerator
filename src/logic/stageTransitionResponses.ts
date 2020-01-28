import {
	ChooseSourceDependencies, GenerationStageName, StageTransitionResponseEvaluator
} from "./types";

export const stagesTransitionResponses: {
	[key in GenerationStageName]: StageTransitionResponseEvaluator
} = {
	chooseSource: (
		dependencies,
		stagesList,
		currentStageIdx,
		transitionTo
	) => {
		const { source } = dependencies as ChooseSourceDependencies;
		if (transitionTo === 'prev') {
			return {
				stagesList,
				currentStageIdx: currentStageIdx - 1,
			}
		} else {
			if (source === 'pattern') {
				let newStagesList = Array.from(stagesList);
				newStagesList.splice(currentStageIdx + 1, 0,
					'specifyPattern');
				return {
					stagesList: newStagesList,
					currentStageIdx: currentStageIdx + 1,
				}
			}
			else {
				return {
					stagesList,
					currentStageIdx: currentStageIdx + 1,
				}
			}
		}
	},
	specifyPattern: (
		dependencies,
		stagesList,
		currentStageIdx,
		transitionTo
	) => {
		if (transitionTo === 'prev') {
			const newStagesList = Array.from(stagesList);
			newStagesList.splice(currentStageIdx, 1);
			return {
				currentStageIdx: currentStageIdx - 1,
				stagesList: newStagesList,
			};
		} else {
			return {
				stagesList,
				currentStageIdx: currentStageIdx + 1,
			}
		}
	},
	additionalOptions: (
		dependencies,
		stagesList,
		currentStageIdx,
		transitionTo
	) => {
		if (transitionTo === 'prev') {
			return {
				stagesList,
				currentStageIdx: currentStageIdx - 1,
			}
		} else {
			return {
				stagesList,
				currentStageIdx: currentStageIdx + 1,
			}
		}
	}
};
