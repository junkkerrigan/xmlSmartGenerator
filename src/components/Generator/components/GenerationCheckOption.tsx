import React, { FC } from 'react';

import { GenerationCheckOptionProps } from './types';

import '../../../styles-resources/check-option.css';

export const GenerationCheckOption: FC<GenerationCheckOptionProps> = (props: GenerationCheckOptionProps) => {
	const { value, children, defaultChecked, onCheck } = props;
	return (
		<label className='generation-option check-option'>
			<input
				type='checkbox'
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
