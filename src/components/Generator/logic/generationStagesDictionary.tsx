import React, { ReactElement } from "react";
import { GenerationPattern } from '../components';
let generationStageDictionary: Map<string, ReactElement> = new Map<string, ReactElement>();
generationStageDictionary.set('1', <GenerationPattern />);
