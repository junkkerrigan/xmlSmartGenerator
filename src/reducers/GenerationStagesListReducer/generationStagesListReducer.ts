import { GenerationStagesListReducer } from "./types";

export const generationStagesListReducer: GenerationStagesListReducer
	= (state, action) => {
	switch (action.type) {
		case 'ADD': {
			return [...state, action.stageToAdd];
		}
		case 'REMOVE': {
			return state.splice(state.length - 1);
		}
		default: {
			return state;
		}
	}
};
