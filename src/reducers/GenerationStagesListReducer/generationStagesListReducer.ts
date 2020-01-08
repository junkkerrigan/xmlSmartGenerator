import { GenerationStageName } from "../../components/Generator/logic";
import { GenerationStagesListReducer } from './types';

export const generationStagesListReducer: GenerationStagesListReducer
	= (state, action) => {
	let newState: Array<GenerationStageName> = Array.from(state);
	const { carouselStore: { setStoreState } } = action;
	switch (action.type) {
		case 'INSERT': {
			const { stageName, index } = action;
			newState.splice(index, 0, stageName);
			break;
		}
		case 'REMOVE': {
			const { index } = action;
			newState.splice(index, 1);
			break;
		}
		case 'REPLACE': {
			const { stageName, index } = action;
			newState.splice(index, 1, stageName);
			break;
		}
		case 'SKIP': {
			break;
		}
		default: {
			break;
		}
	}
	setStoreState({
		totalSlides: newState.length
	});
	return newState;
};
