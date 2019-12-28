import React from 'react';
import { Container } from 'reactstrap';

import { MainHeaderProps } from "./types";

import './MainHeader.scss';

export const MainHeader: React.FC<MainHeaderProps> = () => {
	return (
		<header className='main-header'>
			<Container>
				<h1 className='main-title'>XML Smart Generator</h1>
				<p className='main-subtitle'>Sample XML files for testing and something else</p>
			</Container>
		</header>
	);
};



