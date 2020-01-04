import React, { ChangeEvent, FC, useRef, useState } from "react";

import { defaultPattern } from "./defaultPattern";

import './GenerationPattern.scss';

export const GenerationPattern: FC = () => {
	const [ textareaValue, setTextareaValue ] = useState<string>(defaultPattern);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		setTextareaValue(value);
	};
	const handleDivClick = () => {
		const { current } = textareaRef;
		current && current.focus();
	};

	return (
		<div className='generation-pattern'
		     onClick={handleDivClick}
		>
			<textarea
				className='generation-pattern-input'
				value={textareaValue}
				ref={textareaRef}
				spellCheck={false}
				onChange={handleInputChange}
			/>
		</div>
	);
};
