import React, { FC } from "react";
import { CarouselProvider, Slider } from 'pure-react-carousel'
import { observer } from "mobx-react";
import { useUIDSeed } from 'react-uid';
import { getStageByName } from "../../logic";
import { generatorStore } from '../../store/index';

import { ConcreteGenerationStageProps } from "./generation-stages";
import { GenerationStageType } from "./components";

import './Generator.scss';

export const Generator: FC = observer((props) => {
	const seed = useUIDSeed();

	const { stagesList } = generatorStore;
	return (
		<CarouselProvider
			naturalSlideWidth={100}
			naturalSlideHeight={125}
			totalSlides={stagesList.length}
			dragEnabled={false}
			disableKeyboard={true}
		>
			<Slider>
				{
					stagesList.map((value, index) => {
						const Stage = getStageByName(value);
						let stageType: GenerationStageType;
						if (index === 0) {
							stageType = 'first';
						} else if (index === stagesList.length - 1) {
							stageType = 'final';
						} else {
							stageType = 'regular';
						}
						const props: ConcreteGenerationStageProps = {
							index,
							stageType,
						};
						return (
							<Stage
								{...props}
								key={seed(Stage)}
							/>
						);
					})
				}
			</Slider>
		</CarouselProvider>

	)
});

