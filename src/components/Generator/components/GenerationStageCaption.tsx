import React, { FC, useContext } from "react";
import { GenerationStageCaptionProps } from "./types";

import { CarouselSlideIndexContext } from '../../../contexts';

export const GenerationStageCaption: FC<GenerationStageCaptionProps>
	= (props: GenerationStageCaptionProps) => {
	const { children } = props;
	const index = useContext<number>(CarouselSlideIndexContext);
	return (
		<p className='generation-stage-caption'>
			{`${index + 1}. `}
			{children}

		</p>
	)
};
