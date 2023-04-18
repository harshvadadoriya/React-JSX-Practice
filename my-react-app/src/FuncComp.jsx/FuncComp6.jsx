// We can unmount a component by using the useEffect hook with a cleanup function. The cleanup function will be called when the component is unmounted.

import React, { useState, useEffect } from 'react';

function FuncComp6() {
	const [showComponent, setShowComponent] = useState(true);

	useEffect(() => {
		// Cleanup function
		return () => {
			console.log('Component unmounted');
		};
	}, []);

	const toggleComponent = () => {
		setShowComponent(!showComponent);
	};

	return (
		<div>
			<button onClick={toggleComponent}>Toggle Component</button>
			{showComponent && <ChildComponent />}
		</div>
	);
}

function ChildComponent() {
	useEffect(() => {
		// Effect function
		console.log('Component mounted');

		// Cleanup function
		return () => {
			console.log('Component unmounted');
		};
	}, []);

	return <div>Child Component</div>;
}

export default FuncComp6;
