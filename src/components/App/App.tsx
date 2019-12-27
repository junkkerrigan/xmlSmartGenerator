import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainHeader } from '../MainHeader';

import { AppProps } from './types';

export const App: FC<AppProps> = () => {
	return (
		<Router>
			<MainHeader />
			<Switch>

			</Switch>
		</Router>
	);
};



