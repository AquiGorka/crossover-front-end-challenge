import React from 'react';
import colors from '../utils/colors.js';

const styles = {
	wrapper: {
		boxSizing: 'border-box',
		padding: '10px 0',
		borderTop: '1px solid #E3E3E6',
		display: 'none',
		justifyContent: 'flex-start'
	},
	build: {
		wrapper: {
			boxSizing: 'border-box',
			flexGrow: 1,
			width: '33.333333%',
			display: 'flex',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'flex-start'
		},
		item: {
			flexGrow: 1,
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column'
		},
		build: {
			title: {
				fontSize: 13,
				fontWeight: 'bold'
			},
			time: {
				marginTop: 5,
				fontSize: 11,
				fontWeight: 'bold'
			}
		},
		link: {
			cursor: 'pointer',
			color: '#1D8AC4',
			fontSize: 11,
			fontWeight: 'bold',
			textDecoration: 'underline'
		},
		text: {
			color: '#E3E3E6',
			fontSize: 11,
			fontWeight: 'bold',
			textDecoration: 'underline'
		},
		folder: {
			wrapper: {
				position: 'relative',
				height: 40,
				width: 40

			},
			folder: {
				fontSize: 40,
				position: 'absolute',
				zIndex: 0
			},
			icon: {
				fontSize: 20,
				position: 'absolute',
				zIndex: 1,
				top: 11,
				left: 9
			}
		}
	},
	unit: {
		wrapper: {
			boxSizing: 'border-box',
			padding: '0 10px',
			flexGrow: 1,
			width: '33.333333%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'flex-start'
		},
		inner: {
			boxSizing: 'border-box',
			padding: '0 10px',
			flexDirection: 'column'
		},
		title: {
			fontSize: 14
		},
		label: {
			marginTop: 5,
			fontSize: 11,
			fontWeight: 'bold',
			display: 'none'
		},
		percentage: {
			display: 'inline-block',
			marginTop: 5,
			color: '#BFBFBF',
			fontWeight: 'bold',
			fontSize: 20
		},
		icon: {
			marginLeft: 3,
			fontSize: 14
		},
		cant: {
			color: '#eb5463',
			fontSize: 16,
			position: 'relative',
			top: 2
		},
		text: {
			marginLeft: 15,
			color: '#454545',
			fontSize: 13
		}
	},
	functional: {
		wrapper: {
			boxSizing: 'border-box',
			padding: '0 10px',
			flexGrow: 1,
			width: '33.333333%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'flex-start'
		},
		inner: {
			boxSizing: 'border-box',
			padding: '0 10px',
			flexDirection: 'column'
		},
		title: {
			fontSize: 14
		},
		label: {
			marginTop: 5,
			fontSize: 11,
			fontWeight: 'bold',
			display: 'none'
		},
		percentage: {
			display: 'inline-block',
			marginTop: 5,
			color: '#BFBFBF',
			fontWeight: 'bold',
			fontSize: 20
		},
		icon: {
			marginLeft: 3,
			fontSize: 14
		},
		cant: {
			color: '#eb5463',
			fontSize: 16,
			position: 'relative',
			top: 2
		},
		text: {
			marginLeft: 15,
			color: '#454545',
			fontSize: 13
		}
	},
	pie: {
		wrapper: {
			width: 50,
			height: 50,
			position: 'relative',
			transform: 'rotate(.1turn)'
		},
		one: {
			position: 'relative',
			zIndex: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			background: '#1bb392',
			display: 'inline-block',
			lineHeight: '50px',
			backgroundImage: 'linear-gradient(to right, transparent 50%, #f7ab59 0)',
			color: 'transparent',
			textAlign: 'center'
		},
		two: {
			position: 'absolute',
			zIndex: 1,
			top: 0,
			left: 0,
			marginLeft: '50%',
			height: '100%',
			width: '50%',
			borderRadius: '0 100% 100% 0 / 50%',
			backgroundColor: 'inherit',
			transformOrigin: 'left',
			background: '#1bb392'
		}
	},
	graph: {
		wrapper: {
			display: 'flex'
		},
		inner: {
			paddingLeft: 10,
			display: 'flex',
			flexDirection: 'column',
			fontSize: 11
		},
		passed: {
			display: 'inline-block',
			height: 7,
			width: 7,
			background: '#1bb392',
			marginRight: 3
		},
		failed: {
			display: 'inline-block',
			height: 7,
			width: 7,
			background: '#f7ab59',
			marginRight: 3
		}
	},
	separator: {
		color: '#E3E3E6',
		display: 'flex',
		flexGrow: 1,
		width: 10,
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'default',
		fontSize: 18
	}
};

var Folder = function(props) {
	var myStyles = JSON.parse(JSON.stringify(styles.build.folder)),
		icon = props.icon || null;
	myStyles.folder.color = myStyles.icon.color = props.color || '#FFF';
	return (
		<div style={myStyles.wrapper}>
			<i style={myStyles.folder} className="fa fa-folder-o"></i>
			<div style={myStyles.icon}>{icon}</div>
		</div>
	);
};

var ExtendedBuild = function(props) {
	var icon = null,
		date = new Date(props.item.build.end),
		hours = date.getHours(),
		minutes = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()),
		strTime = (hours >= 12) ? 'pm' : 'am';
	// the hour '0' should be '12'
	hours = hours % 12;
  	hours = hours ? hours : 12;

  	var myStyles = JSON.parse(JSON.stringify(styles.build.build.title));
  	myStyles.color = colors.hex[props.item.build.status];
  	if (props.item.build.status === 'passed') {
		icon = <i className="fa fa-check-square"></i>;
  	} else if (props.item.build.status === 'failed') {
  		icon = <i className="fa fa-times-circle"></i>;
  	}

  	var debugColor = colors.hex['failed'],
  		debugIcon = <i className="fa fa-times-circle-o"></i>,
  		debugLogs = null,
  		debugDownload = <div style={styles.build.text}>debug</div>,
  		debug = null;
  	if (props.item.build.debug.download) {
  		debugColor = colors.hex['passed'];
  		debugIcon = <i className="fa fa-check-circle-o"></i>;
  		debugDownload = <div style={styles.build.link}>debug</div>;
  	}
  	if (props.item.build.debug.logs) {
		debugLogs = <div style={styles.build.link}><i className="fa fa-download"></i> get logs</div>;
  	}
  	debug = (
  		<div style={styles.build.item}>
			<Folder icon={debugIcon} color={debugColor} />
			{debugDownload}
			{debugLogs}
		</div>
	);

  	var releaseColor = colors.hex['failed'],
  		releaseIcon = <i className="fa fa-times-circle-o"></i>,
  		releaseLogs = null,
  		releaseDownload = <div style={styles.build.text}>debug</div>,
  		release = null;
  	if (props.item.build.release.download) {
  		releaseColor = colors.hex['passed'];
  		releaseIcon = <i className="fa fa-check-circle-o"></i>;
		releaseDownload = <div style={styles.build.link}>release</div>;
  	}
  	if (props.item.build.release.logs) {
  		releaseLogs = <div style={styles.build.link}><i className="fa fa-download"></i> get logs</div>;
  	}
	release = (
		<div style={styles.build.item}>
			<Folder icon={releaseIcon} color={releaseColor} />
			{releaseDownload}
			{releaseLogs}
		</div>
	);

	return (
		<div style={styles.build.wrapper}>
			<div style={styles.build.item}>
				<div style={myStyles}>Build {icon}</div>
				<div style={styles.build.build.time}> <i className="fa fa-clock-o"></i> {hours + ':' + minutes + ' ' + strTime}</div>
			</div>
			{debug}
			{release}
		</div>
	)
};

var Pie = function(props) {
	var myStyles = JSON.parse(JSON.stringify(styles.pie)),
		duration,
		minutes,
		seconds;
	myStyles.two.transform = 'rotate(' + props. failed / (props.passed + props.failed) + 'turn)';
	minutes = Math.floor(props.duration / 60);
	seconds = props.duration % 60;
	duration = minutes + '.' + seconds;
	return (
		<div style={styles.graph.wrapper}>
			<div style={styles.pie.wrapper}>
				<div style={styles.pie.one}></div>
				<div style={myStyles.two}></div>
			</div>
			<div style={styles.graph.inner}>
				<div>
					<div style={styles.graph.passed}></div>
					{props.passed}
				</div>
				<div>
					<div style={styles.graph.failed}></div>
					{props.failed}
				</div>
				<div>
					<i className="fa fa-clock-o"></i> {duration}
				</div>
			</div>
		</div>
	);
};

var ExtendedUnit = function(props) {
	var icon = null,
		pie = <Pie passed={props.item.unit.passed} failed={props.item.unit.failed} duration={props.item.unit.duration} />,
		myStyles = JSON.parse(JSON.stringify(styles.unit));

	myStyles.icon.color = colors.hex['failed'];
	if (props.item.unit.status === 'passed') {
		myStyles.icon.color = colors.hex[props.item.unit.status];
		myStyles.percentage.color = colors.hex[props.item.unit.status];
		icon = <i style={myStyles.icon} className="fa fa-check-square"></i>;
  	} else {
  		pie = null;
  		myStyles.label.display = 'inline-block';
  		icon = <i style={myStyles.icon} className="fa fa-minus-circle"></i>;
  	}

	return (
		<div style={styles.unit.wrapper}>
			<div style={styles.unit.inner}>
				<div style={styles.unit.title}>Unit Test {icon}</div>
				<div>
					<span style={myStyles.percentage}>{props.item.unit.percentage + '%'}</span>
					<span style={myStyles.label}><span style={styles.unit.text}>Status:</span> <span style={myStyles.cant}>{"Can't Run"}</span></span>
				</div>
			</div>
			{pie}
		</div>
	)
};

var ExtendedFunctional = function(props) {
	var icon = null,
		pie = <Pie passed={props.item.functional.passed} failed={props.item.functional.failed} duration={props.item.functional.duration} />,
		myStyles = JSON.parse(JSON.stringify(styles.functional));

	myStyles.icon.color = colors.hex['failed'];
	if (props.item.functional.status === 'passed') {
		myStyles.icon.color = colors.hex[props.item.functional.status];
		myStyles.percentage.color = colors.hex[props.item.functional.status];
		icon = <i style={myStyles.icon} className="fa fa-check-square"></i>;
  	} else {
  		pie = null;
  		myStyles.label.display = 'inline-block';
  		icon = <i style={myStyles.icon} className="fa fa-minus-circle"></i>;
  	}

	return (
		<div style={styles.functional.wrapper}>
			<div style={styles.functional.inner}>
				<div style={styles.functional.title}>Functional Test {icon}</div>
				<div>
					<span style={myStyles.percentage}>{props.item.functional.percentage + '%'}</span>
					<span style={myStyles.label}><span style={styles.functional.text}>Status:</span> <span style={myStyles.cant}>{"Can't Run"}</span></span>
				</div>
			</div>
			{pie}
		</div>
	)
};

export default (props) => {
	var myStyles = JSON.parse(JSON.stringify(styles.wrapper));
	if (props.expand) {
		myStyles.display = 'flex';
	}
	return (
		<div style={myStyles}>
			<ExtendedBuild item={props.item} />
			<div style={styles.separator}>></div>
			<ExtendedUnit item={props.item} />
			<div style={styles.separator}>></div>
			<ExtendedFunctional item={props.item} />
		</div>
	)
};