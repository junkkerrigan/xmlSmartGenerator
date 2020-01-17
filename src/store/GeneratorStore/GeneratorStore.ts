import { action, observable } from 'mobx/lib/mobx';
import {
	initialStagesList, GenerationStageDependencies,
	stagesTransitionResponses, initialDependencies,
} from '../../logic';

import { GenerationStageName } from "../../logic";

class GeneratorStore {
	@observable currentStageIdx: number = 0;
	@observable stagesList: Array<GenerationStageName> = initialStagesList;
	@observable dependencies: Array<GenerationStageDependencies> = initialDependencies;

	@action handleStageChange = (
		transitionTo: 'prev' | 'next',
	) => {
		const { stagesList, currentStageIdx } = this;
		const response = stagesTransitionResponses[stagesList[currentStageIdx]](
			this.dependencies[currentStageIdx],
			stagesList,
			currentStageIdx,
			transitionTo,
		);
		const {
			currentStageIdx: newStageIdx,
			stagesList: newStagesList
		} = response;

		this.currentStageIdx = newStageIdx;
		this.stagesList = newStagesList;
	}
}

export const generatorStore = new GeneratorStore();
