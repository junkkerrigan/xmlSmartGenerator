import React, { FC, useContext } from "react";

import { GenerationStageContext } from '../../../contexts';

export const GenerationStageCaption: FC	= ({ children }) => {
	const { index } = useContext(GenerationStageContext);
	return (
		<p className='generation-stage-caption'>
			{`${index + 1}. `}
			{children}
		</p>
	)
};
