import React from 'react';
import Navigation from './Navigation';
import Body from './Body';


export default class Main extends React.Component {
	render() {
		return (
			<div>
				<Navigation/>
				<Body/>
			</div>
		);
	}
}