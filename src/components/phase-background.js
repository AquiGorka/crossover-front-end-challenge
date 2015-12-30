import React from 'react';

const styles = {
	wrapper: {
		position: 'absolute',
		zIndex: 0,
		top: 0,
		left: 0,
		width: 450,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	circle: {
		wrapper: {
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'center',
			position: 'relative',
			zIndex: 1
		},
		inner: {
			borderRadius: 36,
			height: 36,
			width: 36,
			background: '#E3E3E6'
		}
	},
	line1: {
		width: 150,
		height: 10,
		position: 'absolute',
		top: 13,
		left: 75,
		background: '#E3E3E6',
		zIndex: 0
	},
	line2: {
		width: 150,
		height: 10,
		position: 'absolute',
		top: 13,
		left: 225,
		background: '#E3E3E6',
		zIndex: 0
	}
};

export default (props) => {
	return (
		<div style={styles.wrapper}>
			<div style={styles.circle.wrapper}>
				<div style={styles.circle.inner}></div>
			</div>
			<div style={styles.circle.wrapper}>
				<div style={styles.circle.inner}></div>
			</div>
			<div style={styles.circle.wrapper}>
				<div style={styles.circle.inner}></div>
			</div>
			<div style={styles.line1}></div>
			<div style={styles.line2}></div>
		</div>
	);
};