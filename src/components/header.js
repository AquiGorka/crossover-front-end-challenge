import React from 'react';

const styles = {
	wrapper: {
		border: '1px solid #E3E3E6',
		borderLeft: '7px solid #D1D1D1',
		borderBottom: 'none',
		background: '#FFF',
		height: 40,
		display: 'flex',
		boxSizing: 'border-box',
		flexGrow: 1,
		alignItems: 'center',
		color: '#858585',
		fontSize: 14,
		fontWeight: 'bold'
	},
	id: {
		display: 'flex',
		alignItems: 'center',
		flexGrow: 1,
		boxSizing: 'border-box',
		minWidth: 110,
		paddingLeft: 20
	},
	user: {
		boxSizing: 'border-box',
		display: 'flex',
		flexGrow: 1,
		minWidth: 80
	},
	start: {
		boxSizing: 'border-box',
		display: 'flex',
		flexGrow: 1,
		minWidth: 180
	},
	status: {
		boxSizing: 'border-box',
		display: 'flex',
		flexGrow: 1,
		width: 150,
		maxWidth: 150,
		justifyContent: 'center'
	},
	phase: {
		wrapper: {
			boxSizing: 'border-box',
			display: 'flex',
			justifyContent: 'space-around',
			width: 450
		},
		item: {
			boxSizing: 'border-box',
			flexGrow: 1,
			display: 'flex',
			justifyContent: 'center',
			maxWidth: 150
		}
	},
	extended: {
		flexGrow: 1,
		display: 'flex'
	}
};

export default (props) => {
	return (
		<div style={styles.wrapper}>
			<div style={styles.extended}>
				<div style={styles.id}>Changelist</div>
				<div style={styles.user}>Owner</div>
				<div style={styles.start}>Time Started</div>
				<div style={styles.phase.wrapper}>
					<div style={styles.phase.item}>Build</div>
					<div style={styles.phase.item}>Unit Test</div>
					<div style={styles.phase.item}>Functional Test</div>
				</div>
			</div>
			<div style={styles.status}>Status</div>
		</div>
	);
};
