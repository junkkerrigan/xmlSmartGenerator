export type GenerationStageContextData = {
	index: number,
	onTransition: {
		toPrev: () => void,
		toNext: () => void,
	}
}
