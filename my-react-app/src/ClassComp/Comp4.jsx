import React, { Component } from 'react';

class Comp4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			loading: true,
		};
		console.log('Component is initializing...');
	}

	componentDidMount() {
		console.log('Component did mount...');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => this.setState({ posts: data, loading: false }));
	}

	render() {
		const { posts, loading } = this.state;
		return (
			<div>
				<h1>Posts</h1>
				{loading ? (
					<p>Loading posts...</p>
				) : (
					<ul>
						{posts.map((post) => (
							<li key={post.id}>{post.username}</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

export default Comp4;
