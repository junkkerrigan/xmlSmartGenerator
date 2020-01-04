export interface ControlButtonsPanelProps {
	next?: boolean,
	prev?: boolean,
	generate?: boolean
}

export interface ControlButtonProps {
	type: 'next' | 'prev' | 'generate',
}
