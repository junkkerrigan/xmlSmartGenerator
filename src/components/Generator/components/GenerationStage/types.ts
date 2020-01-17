import { ReactNode } from "react";
import { CarouselInjectedProps } from "pure-react-carousel";

export type GenerationStageType = 'first' | 'regular' | 'final';

export type OnTransitionCallback =
	(carouselStore: CarouselInjectedProps['carouselStore']) => void;
export type OnTransitionCallbackWithOptions = {
	callback: OnTransitionCallback,
	isDelayNeeded: boolean,
}
export type GenerationStageProps = {
	children?: ReactNode,
	stageType: GenerationStageType,
	index: number,
	onTransition: {
		toPrev: OnTransitionCallback | OnTransitionCallbackWithOptions,
		toNext: OnTransitionCallback | OnTransitionCallbackWithOptions,
	}
};
