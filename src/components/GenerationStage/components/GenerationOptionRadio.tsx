import React, { FC } from "react";

import { GenerationOptionProps } from "./types";

import '../../../styles-resources/radio-input.css';

export const GenerationOptionRadio: FC<GenerationOptionProps> = (props: GenerationOptionProps) => {
	const { name, value, children } = props;
	return (
		<label className="generation-option">
			<input
				type="radio"
				name={name}
				value={value}
				className="hidden"
			/>
			<span className="generation-option-text" />
			{children}
		</label>
	);
};
