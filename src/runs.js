import React from 'react';

var colors = {
		pending: '#f7ab59',
		failed: '#eb5463',
		passed: '#1bb392',
		running: '#1d84c4'
	},
	styles = {
		wrapper: {
			paddingTop: '5%',
			paddingBottom: '7%',
			maxWidth: '85%',
			margin: 'auto'
		},
		list: {
			listStyle: 'none',
			padding: 0,
			margin: 0,
			borderTop: '1px solid #E3E3E3',
			borderBottom: '1px solid #E3E3E3',
			background: '#FFF'
		},
		listHeader: {
			borderLeft: '5px solid #D1D1D1',
			borderBottom: '1px solid #E3E3E3',
			display: 'flex',
			alignItems: 'center',
			height: 40
		},
		listItem: {
			borderLeft: '5px solid #D1D1D1',
			borderBottom: '1px solid #E3E3E3',
			display: 'flex',
			alignItems: 'center',
			minHeight: 60
		},
		header: {
			wrapper: {
				width: '100%',
				display: 'flex',
				boxSizing: 'border-box',
				flexGrow: 1,
				alignItems: 'center',
				color: '#454545',
				fontSize: 14
			},
			item: {
				boxSizing: 'border-box',
				display: 'flex',
				flexGrow: 1,
				width: 50
			},
			firstItem: {
				boxSizing: 'border-box',
				display: 'flex',
				flexGrow: 1,
				width: 50,
				paddingLeft: 20
			},
			phase: {
				wrapper: {
					boxSizing: 'border-box',
					display: 'flex',
					justifyContent: 'space-around',
					width: 300
				},
				item: {
					boxSizing: 'border-box'
				}
			}
		},
		item: {
			wrapper: {
				width: '100%',
				boxSizing: 'border-box',
				//flexGrow: 1,
				display: 'flex',
				//justifyContent: 'space-between',
				//alignItems: 'center',
				color: '#7A7A7A',
				fontSize: 14
			},
			id: {
				flexGrow: 1,
				fontWeight: 'bold',
				boxSizing: 'border-box',
				width: 50,
				paddingLeft: 20
			},
			user: {
				flexGrow: 1,
				fontSize: 12,
				boxSizing: 'border-box',
				width: 50
			},
			start: {
				flexGrow: 1,
				fontSize: 12,
				letterSpacing: 2,
				boxSizing: 'border-box',
				width: 50
			},
			status: {
				wrapper: {
					width: 50,
					flexGrow: 1,
					fontSize: 12,
					boxSizing: 'border-box',
					display: 'flex',
					alignItems: 'center'
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
					width: 300
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
				status: 'failed',
				end: 1
			},
			data: {
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
				status: 'failed',
				end: 1
			},
			data: {
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
				status: 'failed',
				end: 1
			},
			data: {
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
			id: 432461,
			user: {
				username: 'jTuck'
			},
			start: 1397719735077,
			status: 'failed',
			build: {
				status: 'failed',
				end: 1
			},
			data: {
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
				end: 1
			},
			data: {
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
			end: 1
		},
		data: {
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

class ItemPhase extends React.Component {
	render() {
		return (
			<div style={styles.item.phase.wrapper}>
				<div style={styles.item.phase}>build</div>
				<div style={styles.item.phase}>unit</div>
				<div style={styles.item.phase}>functional</div>
			</div>
		);
	}
}

var ParsedDate = function(props) {
	var date = new Date(props.time),
		hours = date.getHours(),
		strTime = (hours >= 12) ? 'pm' : 'am';
	// the hour '0' should be '12'
	hours = hours % 12;
  	hours = hours ? hours : 12;
	//
	return (
		<div style={styles.item.start}>
			<span>
				{(date.getMonth() + 1)  + '/' + date.getDate() + '/' + date.getFullYear() + ' '}
			</span>
			<span>
				<i className="fa fa-clock-o"></i>
			</span>
			<span>
				{date.getHours() + ':' + date.getMinutes() + ' ' + strTime}
			</span>
		</div>
	);
};

var FormattedStatus = function(props) {
	var myStyles = JSON.parse(JSON.stringify(styles.item.status.wrapper)),
		iconStyles = {
			color: colors[props.item.status],
			fontSize: 14
		},
		icon = <Ellipsis color={colors[props.item.status]} size="14" />;
	myStyles.color = colors[props.item.status];
	myStyles.fontWeight = 'bold';
	myStyles.textTransform = 'capitalize';
	switch(props.item.status) {
		case 'running':
			icon = <i className="fa fa-refresh"></i>;
			break;
		case 'failed':
			icon = <i className="fa fa-times-circle-o"></i>;
			break;
		case 'passed':
			icon = <i className="fa fa-check-circle-o"></i>;
			break;
	}
	return (
		<div style={myStyles}>
			{icon}
			<span style={styles.item.status.text}>{props.item.status}</span>
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
			<div style={styles.item.wrapper}>
				<div style={styles.item.id}>{this.props.item.id}</div>
				<div style={styles.item.user}>{this.props.item.user.username}</div>
				<ParsedDate time={this.props.item.start} />
				<ItemPhase />
				<FormattedStatus item={this.props.item} />
			</div>
		);
	}
};

class List extends React.Component {
	render() {
		return (
			<div style={styles.wrapper}>
				<ul style={styles.list}>
					<li style={styles.listHeader} key="header">
						<div style={styles.header.wrapper}>
							<div style={styles.header.firstItem}>Changelist</div>
							<div style={styles.header.item}>Owner</div>
							<div style={styles.header.item}>Time Started</div>
							<div style={styles.header.phase.wrapper}>
								<div style={styles.header.phase.item}>Build</div>
								<div style={styles.header.phase.item}>Unit Test</div>
								<div style={styles.header.phase.item}>Functional Test</div>
							</div>
							<div style={styles.header.item}>Status</div>
						</div>
					</li>
					{mockData.map((item, index) => {
						var myStyles = JSON.parse(JSON.stringify(styles.listItem)),
							myColor = colors[item.status];
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
