import React, { FC } from 'react';
import { Container } from "reactstrap";
import { MainHeader } from '../MainHeader';
import { Generator } from "../Generator";
import { AppProps } from './types';

export const App: FC<AppProps> = () => {
	return (
		<>
			<MainHeader />
			<div className='generator-wrapper'>
				<Container>
					<Generator />
				</Container>
			</div>
		</>
	);
};



