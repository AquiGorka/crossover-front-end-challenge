import React from 'react';
import colors from '../utils/colors.js';
import PhaseBackground from './phase-background.js';
import Extended from './extended.js';
import Ellipsis from './ellipsis.js';

const styles = {
	wrapper: {
		flexGrow: 1,
		boxSizing: 'border-box',
		display: 'flex',
		color: '#ADADAD',
		fontSize: 14
	},
	id: {
		display: 'flex',
		alignItems: 'center',
		flexGrow: 1,
		fontWeight: 'bold',
		boxSizing: 'border-box',
		minWidth: 110,
		paddingLeft: 20
	},
	user: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexGrow: 1,
		fontSize: 12,
		boxSizing: 'border-box',
		minWidth: 80
	},
	start: {
		wrapper: {
			display: 'flex',
			alignItems: 'center',
			flexGrow: 1,
			fontSize: 12,
			letterSpacing: 2,
			boxSizing: 'border-box',
			minWidth: 180
		},
		icon: {
			marginLeft: 7
		}
	},
	status: {
		wrapper: {
			width: 150,
			maxWidth: 150,
			flexGrow: 1,
			fontSize: 12,
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontWeight: 'bold',
			textTransform: 'capitalize'
		},
		text: {
			marginLeft: 5
		},
		icon: {
			fontSize: 13
		}
	},
	extendedStatus: {
		wrapper: {
			boxSizing: 'border-box',
			width: 150,
			maxWidth: 150,
			flexGrow: 1,
			fontSize: 12,
			boxSizing: 'border-box',
			display: 'flex',
			alignItems: 'center',
			paddingLeft: 10,
			background: '#F2F2F2',
			borderLeft: '1px solid #E3E3E6',
			fontSize: 20,
			justifyContent: 'center'
		},
		text: {
			marginLeft: 5
		},
		icon: {
			fontSize: 26
		},
		status: {
			textAlign: 'right'
		}
	},
	phase: {
		wrapper: {
			boxSizing: 'border-box',
			display: 'flex',
			justifyContent: 'space-around',
			width: 450,
			height: 36,
			position: 'relative'
		},
		status: {
			wrapper: {
				position: 'absolute',
				zIndex: 1,
				top: 4,
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
					borderRadius: 28,
					height: 28,
					width: 28,
					background: '#E3E3E6',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}
			},
			line1: {
				width: 150,
				height: 4,
				position: 'absolute',
				top: 12,
				left: 75,
				background: '#E3E3E6',
				zIndex: 0,
				display: 'none',
				borderRadius: 4
			},
			line2: {
				width: 150,
				height: 4,
				position: 'absolute',
				top: 12,
				left: 225,
				background: '#E3E3E6',
				zIndex: 0,
				display: 'none',
				borderRadius: 4	
			},
			icon: {
				position: 'relative',
				top: 1,
				fontSize: 16,
				color: '#FFF'
			}
		}
	},
	extended: {
		wrapper: {
			flexGrow: 1,
			display: 'flex',
			flexDirection: 'column'	
		},
		inner: {
			flexGrow: 1,
			display: 'flex',
			padding: '10px 0'
		},
		header: {
			flexGrow: 1,
			display: 'flex'
		}
	}
};

var ItemPhase = function(props) {
	var content = null,
		circle1 = <div style={styles.phase.status.circle.inner}></div>,
		circle2 = circle1,
		circle3 = circle1,
		line1 = null,
		line2 = null;
	
	// pending
	if (props.item.status === 'pending') {
		var myStyles = JSON.parse(JSON.stringify(styles.phase.status.circle.inner));
		myStyles.background = colors.hex.pending; 
		circle1 = (
			<div style={myStyles}>
				<Ellipsis color="#FFF" size="18" />
			</div>
		);
	} else {
		// build
		var buildIcon = null,
			buildStyle = JSON.parse(JSON.stringify(styles.phase.status.circle.inner));
		buildStyle.background = colors.hex[props.item.status];
		if (props.item.build.status === 'failed') {
			buildIcon = <i style={styles.phase.status.icon} className="fa fa-exclamation"></i>;
		} else if (props.item.build.status === 'passed') {
			buildIcon = <i style={styles.phase.status.icon} className="fa fa-check"></i>;
		} else if (props.item.build.status === 'running') {
			buildIcon = <i style={styles.phase.status.icon} className="fa fa-refresh"></i>;
		} else {
			buildStyle.background = '#E3E3E6';
		}
		circle1 = (
			<div style={buildStyle}>
				{buildIcon}
			</div>
		);

		// unit
		var unitIcon = null,
			unitStyle = JSON.parse(JSON.stringify(styles.phase.status.circle.inner));
		unitStyle.background = colors.hex[props.item.status];
		if (props.item.unit.status === 'failed') {
			unitIcon = <i style={styles.phase.status.icon} className="fa fa-exclamation"></i>;
		} else if (props.item.unit.status === 'passed') {
			unitIcon = <i style={styles.phase.status.icon} className="fa fa-check"></i>;
		} else if (props.item.unit.status === 'running') {
			unitIcon = <i style={styles.phase.status.icon} className="fa fa-refresh"></i>;
		} else {
			unitStyle.background = '#E3E3E6';
		}
		circle2 = (
			<div style={unitStyle}>
				{unitIcon}
			</div>
		);

		// functional
		var functionalIcon = null,
			functionaltyle = JSON.parse(JSON.stringify(styles.phase.status.circle.inner));
		functionaltyle.background = colors.hex[props.item.status];
		if (props.item.functional.status === 'failed') {
			functionalIcon = <i style={styles.phase.status.icon} className="fa fa-exclamation"></i>;
		} else if (props.item.functional.status === 'passed') {
			functionalIcon = <i style={styles.phase.status.icon} className="fa fa-check"></i>;
		} else if (props.item.functional.status === 'running') {
			functionalIcon = <i style={styles.phase.status.icon} className="fa fa-refresh"></i>;
		} else {
			functionaltyle.background = '#E3E3E6';
		}
		circle3 = (
			<div style={functionaltyle}>
				{functionalIcon}
			</div>
		);

		// line 1
		var line1Styles = JSON.parse(JSON.stringify(styles.phase.status.line1));
		line1Styles.background = '/* On "top" */ repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(100,100,100,.3) 2px, rgba(100,100,100,.3) 5px ), ' + colors.hex[props.item.status];
		switch(props.item.unit.status) {
			case 'running':
			case 'passed':
			case 'failed':
				line1Styles.display = 'block';
				line1 = <div style={line1Styles}></div>;
				break;
		}
		if (props.item.build.status === 'running') {
			line1Styles.display = 'block';
			line1Styles.width = (styles.phase.status.line1.width * (props.item.build.percentage / 100)) + 'px';
			line1 = <div style={line1Styles}></div>;
		}
		
		// line 2
		var line2Styles = JSON.parse(JSON.stringify(styles.phase.status.line2));
		line2Styles.background = '/* On "top" */ repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(100,100,100,.3) 2px, rgba(100,100,100,.3) 5px ), ' + colors.hex[props.item.status];
		switch(props.item.functional.status) {
			case 'running':
				// width

			case 'passed':
			case 'failed':
				line2Styles.display = 'block';
				line2 = <div style={line2Styles}></div>;
				break;
		}
		if (props.item.unit.status === 'running') {
			line2Styles.display = 'block';
			line2Styles.width = (styles.phase.status.line2.width * (props.item.unit.percentage / 100)) + 'px';
			line2 = <div style={line2Styles}></div>;
		}
	}

	content = (
		<div style={styles.phase.status.wrapper}>
			<div style={styles.phase.status.circle.wrapper}>
				{circle1}
			</div>
			<div style={styles.phase.status.circle.wrapper}>
				{circle2}
			</div>
			<div style={styles.phase.status.circle.wrapper}>
				{circle3}
			</div>
			{line1}
			{line2}
		</div>
	);

	return (
		<div style={styles.phase.wrapper}>
			<PhaseBackground />
			{content}
		</div>
	);
};

var ParsedDate = function(props) {
	var date = new Date(props.time),
		hours = date.getHours(),
		minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
		strTime = (hours >= 12) ? 'pm' : 'am';
	// the hour '0' should be '12'
	hours = hours % 12;
  	hours = hours ? hours : 12;
	//
	return (
		<div style={styles.start.wrapper}>
			<span>
				{(date.getMonth() + 1)  + '/' + date.getDate() + '/' + date.getFullYear()}
			</span>
			<i style={styles.start.icon} className="fa fa-clock-o"></i>
			<span>
				{hours + ':' + minutes + ' ' + strTime}
			</span>
		</div>
	);
};

var FormattedStatus = function(props) {
	var content = null,
		myStyles = (!props.expand) ? JSON.parse(JSON.stringify(styles.status)) : JSON.parse(JSON.stringify(styles.extendedStatus)),
		icon = null;
	myStyles.wrapper.color = myStyles.icon.color = colors.hex[props.item.status];
	switch(props.item.status) {
		case 'running':
			icon = <i style={myStyles.icon} className="fa fa-refresh"></i>;
			break;
		case 'failed':
			icon = <i style={myStyles.icon} className="fa fa-times-circle-o"></i>;
			break;
		case 'passed':
			icon = <i style={myStyles.icon} className="fa fa-check-circle-o"></i>;
			break;
		case 'pending':
			icon = <Ellipsis color={colors.hex[props.item.status]} size="14" />;
			break;
	}
	if (props.expand) {
		content = (
			<div style={myStyles.wrapper}>
				<div>
					<div>
						{icon}
						<span style={myStyles.text}>Build</span>
					</div>
					<div style={myStyles.status}>{(props.item.status === 'passed') ? 'Passed' : 'Failure'}</div>
				</div>
			</div>
		);
	} else {
		content = (
			<div style={myStyles.wrapper}>
				{icon}
				<span style={myStyles.text}>{props.item.status}</span>
			</div>
		);
	}
	return content;
};

var RunItem = function(props) {
	var extended = null,
		onClick = function() {},
		myStyles = JSON.parse(JSON.stringify(styles));
	if (props.item.status !== 'pending' && props.item.status !== 'running') {
		myStyles.wrapper.cursor = 'pointer';
		onClick = props.onExpand;
		extended = <Extended item={props.item} expand={props.expand} />;
	}
	if (props.expand) {
		myStyles.extended.inner.borderTop = '2px solid ' + colors.hex[props.item.status];
	}
	return (
		<div style={myStyles.wrapper} onClick={onClick}>
			<div style={styles.extended.wrapper}>
				<div style={myStyles.extended.inner}>
					<div style={styles.id}>{props.item.id}</div>
					<div style={styles.user}>{props.item.user.username}</div>
					<ParsedDate time={props.item.start} />
					<ItemPhase item={props.item} />
				</div>
				{extended}
			</div>
			<FormattedStatus item={props.item} expand={props.expand} />
		</div>
	);
};

export default RunItem;
