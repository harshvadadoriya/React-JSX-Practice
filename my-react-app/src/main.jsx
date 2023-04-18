import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Comp1 from './ClassComp/Comp1';
import Comp2 from './ClassComp/Comp2';
import Comp3 from './ClassComp/Comp3';
import Comp4 from './ClassComp/Comp4';
import FuncComp4 from './FuncComp.jsx/FuncComp4';
import FuncComp5 from './FuncComp.jsx/FuncComp5';
import FuncComp6 from './FuncComp.jsx/FuncComp6';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <App /> */}
		{/* <Comp1 name="harsh" /> */}
		{/* <Comp2 college="LJ" /> */}
		{/* <Comp3 name="Harsh" /> */}
		{/* <Comp4 /> */}
		{/* <FuncComp4 /> */}
		{/* <FuncComp5 />
		 */}
		<FuncComp6 />
	</React.StrictMode>
);
