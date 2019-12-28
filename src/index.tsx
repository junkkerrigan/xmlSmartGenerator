import React from 'react';
import ReactDOM from 'react-dom';
import { App }  from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss-resources/styles.scss';

ReactDOM.render(
	<App />,
	document.getElementById('reactRoot') as HTMLElement
);
