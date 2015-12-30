import React from 'react';
import Runs from './components/runs.js';
import mockData from './utils/mockData.js';

const styles = {
	app: {
		wrapper: {
			background: '#F2F2F2',
			fontFamily: 'Sans-serif',
			minWidth: 1200
		}
	}
};

export default (props) => {
	return (
		<div style={styles.app.wrapper}>
			<Runs data={mockData} />
		</div>
	);
};