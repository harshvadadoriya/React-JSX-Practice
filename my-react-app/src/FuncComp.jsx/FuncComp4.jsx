import React, { useState, useEffect } from 'react';

const Comp4 = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect hook with an empty dependency array ([]) to fetch data from an API when the component is mounted.
	useEffect(() => {
		console.log('Component did mount...');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				// Update the state variables with the fetched data
				setData(data);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h1>Posts</h1>
			{/* Use the `loading` state variable to conditionally render UI */}
			{loading ? (
				<p>Loading posts...</p>
			) : (
				<ul>
					{/* Use the `data` state variable to render a list of posts */}
					{data.map((post) => (
						<li key={post.id}>{post.username}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Comp4;
