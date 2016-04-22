import React, { Component } from 'react';

export default class Caixa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			likes: 0,
			name: 'Luandro Vieira'
		}
		this.curtir = this.curtir.bind(this);
	}
	render() {
		return (
			<div style={{border: '1px solid blue', padding: '15px 10px'}}>
				<span style={{fontWeight: 'bold'}}>Nome: {this.state.name} | </span>
				<span>Curtidas: {this.state.likes} </span><button onClick={this.curtir}>👍</button>
			</div>
		)
	}

	curtir() {
		this.setState({
			likes: this.state.likes + 1
		})
	}

}
