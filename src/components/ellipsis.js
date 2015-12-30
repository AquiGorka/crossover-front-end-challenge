import React from 'react';

export default(props) => {
	var myStyles = {
		color: props.color || '#000',
		borderRadius: props.size || 30,
		width: props.size || 30,
		height: props.size || 30,
		border: '2px solid ' + (props.color || '#000'),
		display: 'inline-flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxSizing: 'border-box',
		fontSize: props.fontSize || 10,
		paddingBottom: props.paddingBottom || (props.size / 2.5) || 6,
		userSelect: 'none',
		WebkitUserSelect: 'none',
		cursor: 'default'
	};
	return <span style={myStyles}>...</span>;
};