import React, { FC } from "react";
import { ChooseSourceStage, SpecifyPatternStage,
	AdditionalOptionsStage} from '../components/Generator/generation-stages';

import { ConcreteGenerationStageProps } from '../components/Generator/generation-stages';
import { GenerationStageName } from "./types";

let generationStagesDictionary:
	Map<GenerationStageName, FC<ConcreteGenerationStageProps>>
	= new Map<GenerationStageName, FC<ConcreteGenerationStageProps>>();
generationStagesDictionary.set('chooseSource', ChooseSourceStage);
generationStagesDictionary.set('specifyPattern', SpecifyPatternStage);
generationStagesDictionary.set('additionalOptions', AdditionalOptionsStage);

export const getStageByName
	= (name: GenerationStageName): FC<ConcreteGenerationStageProps>  => {
	return generationStagesDictionary.get(name) || ChooseSourceStage;
};
