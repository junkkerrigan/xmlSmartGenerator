import React, { FC } from 'react';

import { GenerationRadioOptionProps } from './types';

import '../../../styles-resources/radio-option.css';

export const GenerationRadioOption: FC<GenerationRadioOptionProps> = (props: GenerationRadioOptionProps) => {
	const { name, value, children, defaultChecked, onCheck } = props;
	return (
		<label className='generation-option radio-option'>
			<input
				type='radio'
				name={name}
				value={value}
				defaultChecked={defaultChecked}
				className='display-none'
				onChange={onCheck}
			/>
			<span className='generation-option-button' />
			{children}
		</label>
	);
};
