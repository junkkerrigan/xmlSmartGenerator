import { GenerationStagesListReducer } from "./types";

export const generationStagesListReducer: GenerationStagesListReducer
	= (state, action) => {
	switch (action.type) {
		case 'ADD': {
			return [...state, action.stageToAdd];
		}
		case 'REMOVE': {
			if (state.length === 1) return state;
			return state.splice(0, state.length - 1);
		}
		default: {
			return state;
		}
	}
};
