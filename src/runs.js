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
			margin: 'auto'
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
				borderLeft: '5px solid #D1D1D1',
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
				borderLeft: '5px solid #D1D1D1',
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
			item: {
				boxSizing: 'border-box',
				display: 'flex',
				flexGrow: 1,
				width: 50
			},
			id: {
				boxSizing: 'border-box',
				display: 'flex',
				flexGrow: 1,
				width: 50,
				paddingLeft: 20
			},
			status: {
				boxSizing: 'border-box',
				display: 'flex',
				flexGrow: 1,
				width: 50,
				paddingLeft: 10
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
				width: '100%',
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
				width: 50,
				paddingLeft: 20
			},
			user: {
				display: 'flex',
				alignItems: 'center',
				flexGrow: 1,
				fontSize: 12,
				boxSizing: 'border-box',
				width: 50
			},
			start: {
				wrapper: {
					display: 'flex',
					alignItems: 'center',
					flexGrow: 1,
					fontSize: 12,
					letterSpacing: 2,
					boxSizing: 'border-box',
					width: 50
				},
				icon: {
					marginLeft: 7
				}
			},
			status: {
				wrapper: {
					width: 50,
					flexGrow: 1,
					fontSize: 13,
					boxSizing: 'border-box',
					display: 'flex',
					alignItems: 'center',
					paddingLeft: 10
				},
				text: {
					marginLeft: 5
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
						display: 'none'
					},
					line2: {
						width: 150,
						height: 4,
						position: 'absolute',
						top: 12,
						left: 225,
						background: '#E3E3E6',
						zIndex: 0,
						display: 'none'
					},
					icon: {
						position: 'relative',
						top: 1,
						fontSize: 16,
						color: '#FFF'
					}
				}
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
				end: 0
			},
			unit: {
				status: 'pending',
				duration: 0,
				approve: 0,
				fail: 0,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 0,
				approve: 0,
				fail: 0,
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
				end: 1
			},
			unit: {
				status: 'pending',
				duration: 0,
				approve: 0,
				fail: 0,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 0,
				approve: 0,
				fail: 0,
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
				end: 1
			},
			unit: {
				status: 'passed',
				duration: 0,
				approve: 0,
				fail: 0,
				percentage: 88
			},
			functional: {
				status: 'passed',
				duration: 0,
				approve: 0,
				fail: 0,
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
				end: 1
			},
			unit: {
				status: 'pending',
				duration: 0,
				approve: 0,
				fail: 0,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 0,
				approve: 0,
				fail: 0,
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
				end: 1
			},
			unit: {
				status: 'passed',
				duration: 0,
				approve: 0,
				fail: 0,
				percentage: 0
			},
			functional: {
				status: 'passed',
				duration: 0,
				approve: 0,
				fail: 0,
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
				end: 1
			},
			unit: {
				status: 'failed',
				duration: 0,
				approve: 0,
				fail: 0,
				percentage: 0
			},
			functional: {
				status: 'pending',
				duration: 0,
				approve: 0,
				fail: 0,
				percentage: 0
			}
	}];

var PhaseBackground = function() {
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
				{date.getHours() + ':' + date.getMinutes() + ' ' + strTime}
			</span>
		</div>
	);
};

var FormattedStatus = function(props) {
	var myStyles = JSON.parse(JSON.stringify(styles.runItem.status.wrapper)),
		iconStyles = {
			color: colors.hex[props.item.status],
			fontSize: 13
		},
		icon = <Ellipsis color={colors.hex[props.item.status]} size="14" />;
	myStyles.color = colors.hex[props.item.status];
	myStyles.fontWeight = 'bold';
	myStyles.textTransform = 'capitalize';
	switch(props.item.status) {
		case 'running':
			icon = <i style={iconStyles} className="fa fa-refresh"></i>;
			break;
		case 'failed':
			icon = <i style={iconStyles} className="fa fa-times-circle-o"></i>;
			break;
		case 'passed':
			icon = <i style={iconStyles} className="fa fa-check-circle-o"></i>;
			break;
	}
	return (
		<div style={myStyles}>
			{icon}
			<span style={styles.runItem.status.text}>{props.item.status}</span>
		</div>
	);
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

class RunItem extends React.Component {
	render() {
		return (
			<div style={styles.runItem.wrapper}>
				<div style={styles.runItem.id}>{this.props.item.id}</div>
				<div style={styles.runItem.user}>{this.props.item.user.username}</div>
				<ParsedDate time={this.props.item.start} />
				<ItemPhase item={this.props.item} />
				<FormattedStatus item={this.props.item} />
			</div>
		);
	}
};

var Header = function() {
	return (
		<div style={styles.header.wrapper}>
			<div style={styles.header.id}>Changelist</div>
			<div style={styles.header.item}>Owner</div>
			<div style={styles.header.item}>Time Started</div>
			<div style={styles.header.phase.wrapper}>
				<div style={styles.header.phase.item}>Build</div>
				<div style={styles.header.phase.item}>Unit Test</div>
				<div style={styles.header.phase.item}>Functional Test</div>
			</div>
			<div style={styles.header.status}>Status</div>
		</div>
	);
};

class List extends React.Component {
	render() {
		return (
			<div style={styles.wrapper}>
				<Header />
				<ul style={styles.list.wrapper}>
					{mockData.map((item, index) => {
						var myStyles = JSON.parse(JSON.stringify(styles.list.item)),
							myColor = colors.hex[item.status];
						myStyles.borderLeft = '5px solid ' + myColor;
						return (
								<li style={myStyles} key={index}>
									<RunItem item={item} />
								</li>
							);
					})}
				</ul>
			</div>
		);
	}
};

export default List;
