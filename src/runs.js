import React from 'react';

var colors = {
		hex: {
			pending: '#f7ab59',
			failed: '#eb5463',
			passed: '#1bb392',
			running: '#1d84c4'
		},
		rgb: {
			pending: {
				r: 247,
				g: 171,
				b: 89
			},
			failed: {
				r: 235,
				g: 84,
				b: 99
			},
			passed: {
				r: 27,
				g: 179,
				b: 146
			},
			running: {
				r: 29,
				g: 132,
				b: 196
			}
		}
	},
	styles = {
		wrapper: {
			paddingTop: '5%',
			paddingBottom: '7%',
			maxWidth: '85%',
			margin: 'auto',
			minWidth: 1100
		},
		list: {
			wrapper: {
				listStyle: 'none',
				padding: 0,
				margin: 0,
				borderTop: '1px solid #E3E3E6',
				borderBottom: '1px solid #E3E3E6',
				background: '#FFF'
			},
			item: {
				borderLeft: '7px solid #D1D1D1',
				borderBottom: '1px solid #E3E3E6',
				borderRight: '1px solid #E3E3E6',
				display: 'flex',
				alignItems: 'center',
				minHeight: 60
			}
		},
		header: {
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
			}
		},
		runItem: {
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
				background: {
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
		},
		extended: {
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
					position: 'relative'
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
		}
	},
	mockData = [{
			id: 432464,
			user: {
				username: 'jTuck'
			},
			start: 1397738575077,
			status: 'pending',
			build: {
				status: 'pending',
				percentage: 0,
				end: 0,
				debug: {
					download: true,
					logs: false
				},
				release: {
					download: false,
					logs: true
				}
			},
			unit: {
				status: 'pending',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 0
			}
		}, {
			id: 432463,
			user: {
				username: 'Dora'
			},
			start: 1397731255077,
			status: 'running',
			build: {
				status: 'running',
				percentage: 70,
				end: 1397715295077,
				debug: {
					download: true,
					logs: false
				},
				release: {
					download: false,
					logs: true
				}
			},
			unit: {
				status: 'pending',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 0
			}
		}, {
			id: 432462,
			user: {
				username: 'Samy'
			},
			start: 1397727775077,
			status: 'passed',
			build: {
				status: 'passed',
				percentage: 100,
				end: 1397715295077,
				debug: {
					download: true,
					logs: false
				},
				release: {
					download: false,
					logs: true
				}
			},
			unit: {
				status: 'passed',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 88
			},
			functional: {
				status: 'passed',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 98
			}
		}, {
			id: 432461,
			user: {
				username: 'jTuck'
			},
			start: 1397719735077,
			status: 'failed',
			build: {
				status: 'failed',
				percentage: 0,
				end: 1397715295077,
				debug: {
					download: true,
					logs: false
				},
				release: {
					download: false,
					logs: true
				}
			},
			unit: {
				status: 'pending',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 0,
				passed: 342,
				failed: 3,
				percentage: 0
			}
		}, {
			id: 432460,
			user: {
				username: 'Samy'
			},
			start: 1397715295077,
			status: 'passed',
			build: {
				status: 'passed',
				percentage: 100,
				end: 1397715295077,
				debug: {
					download: true,
					logs: false
				},
				release: {
					download: true,
					logs: false
				}
			},
			unit: {
				status: 'passed',
				duration: 270,
				passed: 342,
				failed: 3,
				percentage: 0
			},
			functional: {
				status: 'passed',
				duration: 210,
				passed: 14321,
				failed: 2000,
				percentage: 0
			}
		}, {
			id: 432459,
			user: {
				username: 'Dora'
			},
			start: 1397708095077,
			status: 'failed',
			build: {
				status: 'passed',
				percentage: 100,
				end: 1397715295077,
				debug: {
					download: true,
					logs: false
				},
				release: {
					download: false,
					logs: true
				}
			},
			unit: {
				status: 'failed',
				duration: 270,
				passed: 342,
				failed: 30,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 210,
				passed: 14321,
				failed: 2000,
				percentage: 0
			}
	}];

var PhaseBackground = function(props) {
	return (
		<div style={styles.runItem.phase.background.wrapper}>
			<div style={styles.runItem.phase.background.circle.wrapper}>
				<div style={styles.runItem.phase.background.circle.inner}></div>
			</div>
			<div style={styles.runItem.phase.background.circle.wrapper}>
				<div style={styles.runItem.phase.background.circle.inner}></div>
			</div>
			<div style={styles.runItem.phase.background.circle.wrapper}>
				<div style={styles.runItem.phase.background.circle.inner}></div>
			</div>
			<div style={styles.runItem.phase.background.line1}></div>
			<div style={styles.runItem.phase.background.line2}></div>
		</div>
	);
};

var ItemPhase = function(props) {
	var content = null,
		circle1 = <div style={styles.runItem.phase.status.circle.inner}></div>,
		circle2 = circle1,
		circle3 = circle1,
		line1 = null,
		line2 = null;
	
	// pending
	if (props.item.status === 'pending') {
		var myStyles = JSON.parse(JSON.stringify(styles.runItem.phase.status.circle.inner));
		myStyles.background = colors.hex.pending; 
		circle1 = (
			<div style={myStyles}>
				<Ellipsis color="#FFF" size="18" />
			</div>
		);
	} else {
		// build
		var buildIcon = null,
			buildStyle = JSON.parse(JSON.stringify(styles.runItem.phase.status.circle.inner));
		buildStyle.background = colors.hex[props.item.status];
		if (props.item.build.status === 'failed') {
			buildIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-exclamation"></i>;
		} else if (props.item.build.status === 'passed') {
			buildIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-check"></i>;
		} else if (props.item.build.status === 'running') {
			buildIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-refresh"></i>;
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
			unitStyle = JSON.parse(JSON.stringify(styles.runItem.phase.status.circle.inner));
		unitStyle.background = colors.hex[props.item.status];
		if (props.item.unit.status === 'failed') {
			unitIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-exclamation"></i>;
		} else if (props.item.unit.status === 'passed') {
			unitIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-check"></i>;
		} else if (props.item.unit.status === 'running') {
			unitIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-refresh"></i>;
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
			functionaltyle = JSON.parse(JSON.stringify(styles.runItem.phase.status.circle.inner));
		functionaltyle.background = colors.hex[props.item.status];
		if (props.item.functional.status === 'failed') {
			functionalIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-exclamation"></i>;
		} else if (props.item.functional.status === 'passed') {
			functionalIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-check"></i>;
		} else if (props.item.functional.status === 'running') {
			functionalIcon = <i style={styles.runItem.phase.status.icon} className="fa fa-refresh"></i>;
		} else {
			functionaltyle.background = '#E3E3E6';
		}
		circle3 = (
			<div style={functionaltyle}>
				{functionalIcon}
			</div>
		);

		// line 1
		var line1Styles = JSON.parse(JSON.stringify(styles.runItem.phase.status.line1));
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
			line1Styles.width = (styles.runItem.phase.status.line1.width * (props.item.build.percentage / 100)) + 'px';
			line1 = <div style={line1Styles}></div>;
		}
		
		// line 2
		var line2Styles = JSON.parse(JSON.stringify(styles.runItem.phase.status.line2));
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
			line2Styles.width = (styles.runItem.phase.status.line2.width * (props.item.unit.percentage / 100)) + 'px';
			line2 = <div style={line2Styles}></div>;
		}
	}

	content = (
		<div style={styles.runItem.phase.status.wrapper}>
			<div style={styles.runItem.phase.status.circle.wrapper}>
				{circle1}
			</div>
			<div style={styles.runItem.phase.status.circle.wrapper}>
				{circle2}
			</div>
			<div style={styles.runItem.phase.status.circle.wrapper}>
				{circle3}
			</div>
			{line1}
			{line2}
		</div>
	);

	return (
		<div style={styles.runItem.phase.wrapper}>
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
		<div style={styles.runItem.start.wrapper}>
			<span>
				{(date.getMonth() + 1)  + '/' + date.getDate() + '/' + date.getFullYear()}
			</span>
			<i style={styles.runItem.start.icon} className="fa fa-clock-o"></i>
			<span>
				{hours + ':' + minutes + ' ' + strTime}
			</span>
		</div>
	);
};

var FormattedStatus = function(props) {
	var content = null,
		myStyles = (!props.expand) ? JSON.parse(JSON.stringify(styles.runItem.status)) : JSON.parse(JSON.stringify(styles.runItem.extendedStatus)),
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

var Ellipsis = function(props) {
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

var Folder = function(props) {
	var myStyles = JSON.parse(JSON.stringify(styles.extended.build.folder)),
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

  	var myStyles = JSON.parse(JSON.stringify(styles.extended.build.build.title));
  	myStyles.color = colors.hex[props.item.build.status];
  	if (props.item.build.status === 'passed') {
		icon = <i className="fa fa-check-square"></i>;
  	} else if (props.item.build.status === 'failed') {
  		icon = <i className="fa fa-times-circle"></i>;
  	}

  	var debugColor = colors.hex['failed'],
  		debugIcon = <i className="fa fa-times-circle-o"></i>,
  		debugLogs = null,
  		debugDownload = <div style={styles.extended.build.text}>debug</div>,
  		debug = null;
  	if (props.item.build.debug.download) {
  		debugColor = colors.hex['passed'];
  		debugIcon = <i className="fa fa-check-circle-o"></i>;
  		debugDownload = <div style={styles.extended.build.link}>debug</div>;
  	}
  	if (props.item.build.debug.logs) {
		debugLogs = <div style={styles.extended.build.link}><i className="fa fa-download"></i> get logs</div>;
  	}
  	debug = (
  		<div style={styles.extended.build.item}>
			<Folder icon={debugIcon} color={debugColor} />
			{debugDownload}
			{debugLogs}
		</div>
	);

  	var releaseColor = colors.hex['failed'],
  		releaseIcon = <i className="fa fa-times-circle-o"></i>,
  		releaseLogs = null,
  		releaseDownload = <div style={styles.extended.build.text}>debug</div>,
  		release = null;
  	if (props.item.build.release.download) {
  		releaseColor = colors.hex['passed'];
  		releaseIcon = <i className="fa fa-check-circle-o"></i>;
		releaseDownload = <div style={styles.extended.build.link}>release</div>;
  	}
  	if (props.item.build.release.logs) {
  		releaseLogs = <div style={styles.extended.build.link}><i className="fa fa-download"></i> get logs</div>;
  	}
	release = (
		<div style={styles.extended.build.item}>
			<Folder icon={releaseIcon} color={releaseColor} />
			{releaseDownload}
			{releaseLogs}
		</div>
	);

	return (
		<div style={styles.extended.build.wrapper}>
			<div style={styles.extended.build.item}>
				<div style={myStyles}>Build {icon}</div>
				<div style={styles.extended.build.build.time}> <i className="fa fa-clock-o"></i> {hours + ':' + minutes + ' ' + strTime}</div>
			</div>
			{debug}
			{release}
		</div>
	)
};

var Pie = function(props) {
	var myStyles = JSON.parse(JSON.stringify(styles.extended.pie)),
		duration,
		minutes,
		seconds;
	myStyles.two.transform = 'rotate(' + props. failed / (props.passed + props.failed) + 'turn)';
	minutes = Math.floor(props.duration / 60);
	seconds = props.duration % 60;
	duration = minutes + '.' + seconds;
	return (
		<div style={styles.extended.graph.wrapper}>
			<div style={styles.extended.pie.wrapper}>
				<div style={styles.extended.pie.one}></div>
				<div style={myStyles.two}></div>
			</div>
			<div style={styles.extended.graph.inner}>
				<div>
					<div style={styles.extended.graph.passed}></div>
					{props.passed}
				</div>
				<div>
					<div style={styles.extended.graph.failed}></div>
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
		myStyles = JSON.parse(JSON.stringify(styles.extended.unit));

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
		<div style={styles.extended.unit.wrapper}>
			<div style={styles.extended.unit.inner}>
				<div style={styles.extended.unit.title}>Unit Test {icon}</div>
				<div>
					<span style={myStyles.percentage}>{props.item.unit.percentage + '%'}</span>
					<span style={myStyles.label}><span style={styles.extended.unit.text}>Status:</span> <span style={myStyles.cant}>{"Can't Run"}</span></span>
				</div>
			</div>
			{pie}
		</div>
	)
};

var ExtendedFunctional = function(props) {
	var icon = null,
		pie = <Pie passed={props.item.functional.passed} failed={props.item.functional.failed} duration={props.item.functional.duration} />,
		myStyles = JSON.parse(JSON.stringify(styles.extended.functional));

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
		<div style={styles.extended.functional.wrapper}>
			<div style={styles.extended.functional.inner}>
				<div style={styles.extended.functional.title}>Functional Test {icon}</div>
				<div>
					<span style={myStyles.percentage}>{props.item.functional.percentage + '%'}</span>
					<span style={myStyles.label}><span style={styles.extended.functional.text}>Status:</span> <span style={myStyles.cant}>{"Can't Run"}</span></span>
				</div>
			</div>
			{pie}
		</div>
	)
};

var Extended = function(props) {
	var myStyles = JSON.parse(JSON.stringify(styles.extended.wrapper));
	if (props.expand) {
		myStyles.display = 'flex';
	}
	return (
		<div style={myStyles}>
			<ExtendedBuild item={props.item} />
			<div style={styles.extended.separator}>></div>
			<ExtendedUnit item={props.item} />
			<div style={styles.extended.separator}>></div>
			<ExtendedFunctional item={props.item} />
		</div>
	)
};

var RunItem = function(props) {
	var extended = null,
		onClick = function() {},
		myStyles = JSON.parse(JSON.stringify(styles.runItem));
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
			<div style={styles.runItem.extended.wrapper}>
				<div style={myStyles.extended.inner}>
					<div style={styles.runItem.id}>{props.item.id}</div>
					<div style={styles.runItem.user}>{props.item.user.username}</div>
					<ParsedDate time={props.item.start} />
					<ItemPhase item={props.item} />
				</div>
				{extended}
			</div>
			<FormattedStatus item={props.item} expand={props.expand} />
		</div>
	);
};

var Header = function(props) {
	return (
		<div style={styles.header.wrapper}>
			<div style={styles.runItem.extended.header}>
				<div style={styles.header.id}>Changelist</div>
				<div style={styles.header.user}>Owner</div>
				<div style={styles.header.start}>Time Started</div>
				<div style={styles.header.phase.wrapper}>
					<div style={styles.header.phase.item}>Build</div>
					<div style={styles.header.phase.item}>Unit Test</div>
					<div style={styles.header.phase.item}>Functional Test</div>
				</div>
			</div>
			<div style={styles.header.status}>Status</div>
		</div>
	);
};

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			extendedIndex: -1
		}
	}
	onExpand(index) {
		if (this.state.extendedIndex === index) {
			index = -1;
		}
		this.setState({
			extendedIndex: index
		});
	}
	//
	render() {
		return (
			<div style={styles.wrapper}>
				<Header />
				<ul style={styles.list.wrapper}>
					{mockData.map((item, index) => {
						var myStyles = JSON.parse(JSON.stringify(styles.list.item)),
							myColor = colors.hex[item.status];
						if (this.state.extendedIndex !== index) {
							myStyles.borderLeft = '7px solid ' + myColor;
						}
						return (
								<li style={myStyles} key={index}>
									<RunItem item={item} onExpand={ () => { this.onExpand(index); }} expand={(this.state.extendedIndex === index)} />
								</li>
							);
					})}
				</ul>
			</div>
		);
	}
};

export default List;
