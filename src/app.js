import React from 'react';
import Runs from './runs.js';

var styles = {
	app: {
		wrapper: {
			background: '#F2F2F2',
			fontFamily: 'Sans-serif'
		}
	}
};

export default (props) => {
	return (
		<div style={styles.app.wrapper}>
			<Runs />
		</div>
	);
};