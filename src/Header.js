import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class Header extends React.Component {
	render() {
		return (
			<section class = 'web-header block'>
				<div class = 'web-name'>
					<Bounce top>
						<p>Hey there, <br/>Thanks for visiting my site.</p>
					</Bounce>
				</div>
			</section>
		);
	}
}