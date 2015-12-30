import React from 'react';
import RunItem from './item.js';
import Header from './header.js';
import colors from '../utils/colors.js';

const styles = {
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
	}
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
		var data = this.props.data.sort( (a, b) => { return b.start - a.start; } );
		return (
			<div style={styles.wrapper}>
				<Header />
				<ul style={styles.list.wrapper}>
					{data.map((item, index) => {
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
