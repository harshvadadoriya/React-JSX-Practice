import React from 'react';
class Comp3 extends React.Component {
	constructor(props) {
		super(props);
		// to access props inside constructor() then pass props in constructor() and super(), else no need to write props if you don't need to access them inside constructor()
		console.log(this.props.name);
		this.state = {
			count: 0,
		};
	}
	Increment = () => {
		this.setState((prevState) => {
			console.log('Previous state:', prevState);
			return {
				count: prevState.count + 1,
			};
		});
	};

	render() {
		return (
			<>
				<h1>{this.props.name}</h1>
				<p>{this.state.count}</p>
				<button onClick={this.Increment}>Increment</button>
			</>
		);
	}
}

export default Comp3;

// constructor() are used to initialize state or bind method, e.x., you are in child component and you want to read/access parent components function/properties then you will need to use constructor()
