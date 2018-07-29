import { Router } from 'preact-router';
import { createHashHistory } from 'history';

import Home from '../routes/home';
import Wizard from '../routes/wizard';

import Header from './header';
import Clock from './clock';

export default () => (
	<main>
		<Header />
		<Router history={createHashHistory()}>
			<Home path="/" />
			<Wizard path="/wizard" />
		</Router>
		<Clock />
	</main>
);
