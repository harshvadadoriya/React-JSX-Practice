import React, { Component } from 'react';

class Comp2 extends Component {
	// not passed props in constructor() and super()  because i don't need to use props inside constructor() method
	constructor() {
		super();
		this.state = {
			name: 'harsh',
			age: 21,
		};
	}

	render() {
		return (
			<>
				<h1>{this.state.name}</h1>
				<p>{this.state.age}</p>
				<p>{this.props.college}</p>
			</>
		);
	}
}

export default Comp2;
