import React from 'react';

class Comp1 extends React.Component {
	render() {
		return (
			<>
				<h1>Class</h1>
				<p>{this.props.name}</p>
			</>
		);
	}
}

export default Comp1;

// If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.

//? Typically, in React constructors are only used for two purposes:
// 1. Initializing local state by assigning an object to this.state.
// 2. Binding event handler methods to an instance.

// render() will not be invoked if shouldComponentUpdate() returns false.

// If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

// You should not call setState() in the constructor(). Instead, if your component needs to use local state, assign the initial state to this.state directly in the constructor

// Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead. You may call setState() immediately in componentDidMount().

// Avoid introducing any side-effects or subscriptions in the constructor. For those use cases, use componentDidMount() instead.
