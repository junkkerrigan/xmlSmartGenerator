import React, { FC } from 'react';

import { GenerationCheckOptionProps } from './types';

import '../../../styles-resources/check-option.css';

export const GenerationCheckOption: FC<GenerationCheckOptionProps> = (props: GenerationCheckOptionProps) => {
	const { value, children, checked } = props;
	return (
		<label className='generation-option check-option'>
			<input
				type='checkbox'
				value={value}
				defaultChecked={checked}
				className='display-none'
			/>
			<span className='generation-option-button' />
			{children}
		</label>
	);
};
