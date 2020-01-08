export interface ControlButtonsPanelProps {
	next?: boolean,
	prev?: boolean,
	generate?: boolean
}

export interface ControlButtonProps {
	btnType: 'next' | 'prev' | 'generate',
}
