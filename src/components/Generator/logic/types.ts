export interface GenerationStageNode {
	name: string,
	next: GenerationStageNode | null,
}
