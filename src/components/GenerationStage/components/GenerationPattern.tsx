import React, { ChangeEvent, FC, useState } from "react";

export const GenerationPattern: FC = () => {
	const [ inputValue, setInputValue ] = useState<string>('');

	const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = e.target;
		setInputValue(value);
	};

	return (
		<div className='generation-pattern'>
			<textarea
				className='generation-pattern-input'
				value={inputValue}
				onChange={handleInputChange}
			/>
		</div>
	);
};
