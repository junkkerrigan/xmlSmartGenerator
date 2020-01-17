import React, { Component, ReactNode } from "react";
import { CarouselInjectedProps, Slide, WithStore } from "pure-react-carousel";
import { ControlPanel } from "../ControlPanel";
import { GenerationStageContext } from "../../../../contexts";

import { GenerationStageContextData } from "../../../../contexts";
import {GenerationStageProps, OnTransitionCallbackWithOptions} from './types';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './GenerationStage.scss';

class GenerationStage extends Component<
	GenerationStageProps & CarouselInjectedProps
> {
	public render(): ReactNode {
		const {
			children, index, stageType, onTransition: {
				toNext, toPrev
			}, carouselStore
		} = this.props;
		const providerValue: GenerationStageContextData = {
			index,
			onTransition: {
				toPrev: () => {
					if ('callback' in toPrev) {
						setTimeout(() => {
							toPrev.callback(carouselStore);
						}, 500);
					} else {
						toPrev(carouselStore);
					}
				},
				toNext: () => {
					if ('callback' in toNext) {
						setTimeout(() => {
							toNext.callback(carouselStore);
						}, 500);
					} else {
						toNext(carouselStore);
					}
				}
			}
		};
		console.log(index);
		return (
			<GenerationStageContext.Provider value={providerValue}>
				<Slide
					index={index}
					innerClassName='disable-outline'
				>
					{children}
					<ControlPanel
						prev={stageType !== 'first'}
						next={stageType !== 'final'}
						generate={stageType === 'final'}
					/>
				</Slide>
			</GenerationStageContext.Provider>
		);
	}
}

const GenerationStageWithStore = WithStore(GenerationStage);

export { GenerationStageWithStore as GenerationStage };
