import { Reducer } from "react";
import { GenerationStageName } from "../../components/Generator/logic";
import {CarouselInjectedProps} from "pure-react-carousel";

export type GenerationStagesListAction =
  |	{
		type: 'INSERT' | 'REPLACE',
		index: number,
		stageName: GenerationStageName,
	}
  | {
		type: 'REMOVE',
		index: number
	}
  | {
		type: 'SKIP',
	};

export type GenerationStagesListReducer = Reducer<
	Array<GenerationStageName>,
	GenerationStagesListAction & Pick<CarouselInjectedProps, 'carouselStore'>
>;
